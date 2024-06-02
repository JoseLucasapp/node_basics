module.exports = (app)=>{
    app.get('/',(req,res)=>{
        app.app.controllers.index.home(app, req, res);
    });
}