module.exports.noticia = (app, req, res)=>{
    var connection = app.config.db_connection();
    var NoticiaModule = new app.app.models.noticiasModel;

    var id_noticia = req.query;
    NoticiaModule.getNoticia(connection, id_noticia,(error, result)=>{
        res.render('noticias/noticia',{noticia: result});
    });
}

module.exports.noticias = (app, req, res)=>{
    var connection = app.config.db_connection();
    var noticiasModule = new app.app.models.noticiasModel;
    
    noticiasModule.getNoticias(connection, (error, result)=>{
        res.render('noticias/noticias',{noticias: result});
    });
}