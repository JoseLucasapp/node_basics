module.exports.index = (app, req, res)=>{
    var connection = app.config.db_connection();
    var noticiasModel = new app.app.models.noticiasModel;

    noticiasModel.get5Ultimas(connection, (error, result)=>{
        res.render('home/index', {noticia: result});
    });
}