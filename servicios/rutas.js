module.exports =app=>{
  const autor = require("./controlador/controlador.js")
  app.get("/ObtenerTodo",autor.ObtenerTodo);
};
