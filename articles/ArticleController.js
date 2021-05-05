const express = require('express');
const router = express.Router();

router.get('/article/:id', (req,res) => {
    res.send("rota de categorias")
});

router.get('/articles', (req,res) => {
    res.send("rota de categorias")
});

module.exports = router;
