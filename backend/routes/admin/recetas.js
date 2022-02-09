var express = require('express');
var router = express.Router();
var recetasModel = require('../../models/recetasModel');

router.get('/', async function(req, res, next) {
    var recetas = await recetasModel.getRecetas();
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
        if (req.body.titulo != "" && req.body.ingredientes != "" && req.body.preparacion != "") {
            await recetasModel.insertReceta(req.body);
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
        var obj = {
            titulo: req.body.titulo,
            ingredientes: req.body.ingredientes,
            preparacion: req.body.preparacion,
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