var express = require('express');
var router = express.Router();
var recetasModel = require('./../models/recetasModel');
var cloudinary = require('cloudinary').v2;

router.get('/recetas', async function (req, res, next) {
    let recetas = await recetasModel.getRecetas();
    
    recetas = recetas.map(recetas => {
        var url = ''
        if (recetas.img_id) {
            url = recetas.img_id
        } else {
            url = 'https://res.cloudinary.com/quecomemos/image/upload/v1644531087/noimageavailable_jzak89.png'
        }
        const imagen = cloudinary.url(url, {
            width: 960,
            height:200,
            crop: 'fill'
        });
        return {
            ...recetas,
            imagen
        }
    });

    res.json(recetas);
});

module.exports = router