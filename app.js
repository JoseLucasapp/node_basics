const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = process.env.PORT || 3000;

app.set('view engine',ejs);

require('./app/routes/index')(app);

app.listen(PORT);