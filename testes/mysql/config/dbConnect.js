var mysql = require('mysql');

var connect = ()=>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1315',
        database: 'teste'
    });
}

module.exports = ()=>{
    return connect;
};