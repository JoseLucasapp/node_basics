module.exports.formulario = (app, req, res)=>{
    res.render('admin/form_add_noticia', {validacao: '', noticia: ''});
}

module.exports.salvar_noticia = (app, req, res)=>{
    var noticia = req.body;
    
    req.assert('titulo', 'título obrigatório').notEmpty();
    req.assert('resumo', 'resumo deve ter entre 10 e 100').len(10,100);
    req.assert('author', 'autor obrigatório').notEmpty();
    req.assert('noticia', 'notícia obrigatória').notEmpty();
    req.assert('data_noticia', 'data obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});

    var errors = req.validationErrors();

    if(errors){
        res.render('admin/form_add_noticia', {validacao : errors, noticia: noticia});
        return;
    }

    var connection = app.config.db_connection();
    var noticiasModule = new app.app.models.noticiasModel;
    
    noticiasModule.salvarNoticia(noticia, connection, (error, result)=>{
        res.redirect('/noticias');
    });
}