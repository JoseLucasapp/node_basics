var app = require('./config/server');

var Home = require('./app/routes/home')(app);

app.listen(3000);