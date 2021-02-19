module.exports = (app, connect)=>{
    app.get('/',(req,res)=>{
        var connect = app.config.dbConnect();
        var model = app.app.Models.homeModels;
        model.getLista(connect, (error, result)=>{
            res.render('view.ejs',{arquivo: result});
        });
    });
}