const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.render('home');
});
app.get('/about', (req,res)=>{
    res.render('about');
});

app.listen(3000);