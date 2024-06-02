let app = require('./config/server');

let server = app.listen(3000);

let io = require('socket.io').listen(server);

app.set('io', io);

io.on('connect', (socket)=>{
    console.log('Conectado');
    socket.on('disconnect',()=>{
        console.log('desconectou');
    });
    socket.on('novaMensagem', (data)=>{
        socket.emit('mensagemCliente', {
            apelido: data.apelido, mensagem: data.mensagem
        });
        socket.broadcast.emit('mensagemCliente', {
            apelido: data.apelido, mensagem: data.mensagem
        });

        if(parseInt(data.contagem) == 0){
            socket.emit('novoUsuario', {
                apelido: data.apelido
            });
            socket.broadcast.emit('novoUsuario', {
                apelido: data.apelido
            });
        }
    });
});