var mysql = require('mysql');
var mysqlConnection = ()=>{
    return mysql.createConnection({
        host : 'localhost',
        user: 'root',
        password : '1315',
        database: 'noticias'
    });
}
module.exports = ()=>{
    return mysqlConnection;
};