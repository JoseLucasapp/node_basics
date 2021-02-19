function Noticias(){
}
Noticias.prototype.getNoticias = (connection, callback)=>{
    connection.query('select * from noticia', callback);
};
Noticias.prototype.getNoticia = (connection, id_noticia, callback)=>{
    connection.query('select * from noticia where id_noticia = ' + id_noticia.id_noticia, callback);
};
Noticias.prototype.salvarNoticia = (noticia , connection, callback)=>{
    connection.query('insert into noticia set ?', noticia, callback);
}
Noticias.prototype.get5Ultimas = (connection, callback)=>{
    connection.query('select * from noticia order by data_criacao desc limit 5', callback)
}
module.exports = ()=>{
    return Noticias;
}