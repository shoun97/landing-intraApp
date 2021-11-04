
require('dotenv').config()
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;
let nombre = 'IntraLabs Ltda.'



hbs.registerPartials(__dirname + '/views/partials', function (err){});

app.set('view engine', 'hbs')


// servir contenido estático
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.render('home',{
       nombre
   });
});

app.get('/generic', function (req, res) {
    /* res.sendFile(__dirname + '/public/generic.html') */
    res.render('generic');
})

app.get('*', function(req,res){
    res.render('home',{
        nombre
    });
})
app.listen(port, () => {
    console.log(`Servidor Online`);
})