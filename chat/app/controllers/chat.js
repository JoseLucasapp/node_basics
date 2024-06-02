module.exports.iniciarChat = (app, req, res)=>{

    let apelido = req.body;

    req.assert('apelido', 'nome não pode ser vazio').notEmpty();
    req.assert('apelido', 'nome deve conter entre 3 e 15 caracteres').len(3, 15);

    let errors = req.validationErrors();

    if(errors){
        res.render('index', {error : errors});
        return;
    }

    app.get('io').emit('mensagemCliente', {
        apelido : apelido.apelido,
        mensagem : 'entrou na sala'
    });
    res.render('chat', {apelido : apelido.apelido});
}