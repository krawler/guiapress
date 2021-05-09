const express = require('express');
const router = express.Router();
const slugify = require('slugify');

const category = require('./Category');

router.get('/admin/categories/new', (req,res) => {
    res.render('admin/categories/new');
});

router.post('/admin/categories/save', (req,res) => {
    const title = req.body.title
    if(title != undefined){
        
        category.create({
            title: title,
            slug: slugify(title),
        }).then(() => {
            
        })  
    }else{
        res.redirect("/admin/categories/new")
    }
        
    res.send("rota de categorias")
});

router.get('/admin/categories/', (req,res) => {
    category.findAll().then(categories => {
        res.render("admin/categories/index", {categories : categories})
    });
});

module.exports = router;
