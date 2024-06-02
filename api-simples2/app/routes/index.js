module.exports = function(application){
	application.get('/', function(req, res){
		res.send('Bem vindo a sua app NodeJS!');
	});
}