
module.exports=app=>{
    const autor = require('./Controller/controller_autor');
    app.post('/obtenerAutor',autor.obtenerAutor);
      app.post('/NuevoAutor',autor.crearNuevoAutor);
       app.post('/EliminarAutor',autor.eliminarAutor);
}
