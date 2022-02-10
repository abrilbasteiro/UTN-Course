var express = require('express');
var router = express.Router();
var recetasModel = require('../../models/recetasModel');
var util = require('util');
var cloudinary = require('cloudinary').v2   ;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function(req, res, next) {
    var recetas = await recetasModel.getRecetas();

    recetas = recetas.map(receta => {
        var url = ''
        if (receta.img_id) {
            url = receta.img_id
        } else {
            url = 'https://res.cloudinary.com/quecomemos/image/upload/v1644531087/noimageavailable_jzak89.png'
        }
        const imagen = cloudinary.image(url, {
            width: 80,
            height:80,
            crop: 'fill'
        });
        return {
            ...receta,
            imagen
        }
    });

    res.render('admin/recetas',{
        layout:'admin/layout',
        usuario:req.session.nombre, 
        recetas
    });
});

/* Formulario para agregar receta */
router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar',{
        layout:'admin/layout',
    });
});

/* Procesa el formulario para agregar receta */
router.post('/agregar', async (req, res, next) => {
    try {
        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0){
            imagen = req.files.imagen;
            img_id = (await uploader (imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo != "" && req.body.ingredientes != "" && req.body.preparacion != "") {
            await recetasModel.insertReceta({
                ...req.body,
                img_id
            });
            
            res.redirect('/admin/recetas')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargó la receta'
        })
    }
});

/* Borrar una receta */
router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    let receta = await recetasModel.getRecetaById(id);
    if (receta.img_id) {
        await (destroy(receta.img_id));
    }

    await recetasModel.deleteRecetaById(id);
    res.redirect('/admin/recetas');
});

/* Mostrar la receta a modificar */ 
router.get('/modificar/:id', async (req, res, next) => {
    var id = req.params.id;
    console.log(req.params.id);
    var receta = await recetasModel.getRecetaById(id);

    console.log(req.params.id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        receta
    })
})

/* Modificar la receta */
router.post('/modificar', async (req, res, next) => {
    try {

        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }

        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }

        var obj = {
            titulo: req.body.titulo,
            ingredientes: req.body.ingredientes,
            preparacion: req.body.preparacion,
            img_id
        }
        console.log(obj)

        await recetasModel.updateRecetaById(obj, req.body.id);
        res.redirect('/admin/recetas');
    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modificó la receta'
        })
    }
})


module.exports = router;  