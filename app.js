const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./views'))

app.get('/',(req,res)=>{
    res.render(path.join(__dirname + "index.html"));
});

app.listen(3000);