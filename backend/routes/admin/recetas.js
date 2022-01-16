var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin/recetas',{
        layout:'admin/layout',
        usuario:req.session.nombre
    });
});

module.exports = router;