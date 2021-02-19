module.exports = ()=>{
    this.getLista = (connect, callback)=>{
        connect.query('select * from testeum', callback);
    };
    this.setLista = (nome, connect, callback)=>{
        connect.query('insert into testeum set ?',nome, callback);
    }
    return this;
}