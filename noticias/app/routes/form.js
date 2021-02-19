module.exports = (app)=>{
    app.get('/formulario',(req,res)=>{
        app.app.controllers.form.formulario(app, req, res);
    });
    app.post('/noticias/salvar',(req,res)=>{
        app.app.controllers.form.salvar_noticia(app, req, res)
    });

}