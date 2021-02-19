const app = require("../../config/server")

module.exports = (app)=>{
    app.get('/form',(req,res)=>{
        res.render('form');
    });
    app.post('/novonome',(req,res)=>{
        var novoNome = req.body;
        var connect = app.config.dbConnect();
        var model = app.app.Models.homeModels;

        model.setLista(novoNome, connect,(error, result)=>{
            res.redirect('/');
        });
    });
}