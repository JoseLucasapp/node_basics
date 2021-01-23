const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./views'))

app.get('/',(req,res)=>{
    res.render(path.join(__dirname + "index.html"));
});

app.listen(PORT);