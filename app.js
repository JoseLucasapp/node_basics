const express = require('express');
const handlebars = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const app = express();
const http = require('http').createServer(app);

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.static('./public'))

app.get('/', (req, res)=>{
    res.render('home');
});
app.get('/about', (req,res)=>{
    res.render('about');
});

http.listen(PORT);