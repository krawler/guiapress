const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const categoriesController = require('./categories/categoriesController');

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use("/", categoriesController);

app.listen(8081, () => {
    console.log('O servidor esta rodando na porta 8081')
});