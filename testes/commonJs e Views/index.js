var app = require('./config/server');

var homePage = require('./app/routes/home')(app);

app.listen(3000);