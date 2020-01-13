module.exports =app=>{
  const autor = require("../Modelos/autor.js")
  app.get("ObtenerTodo",autor.Obtenertodo);

};
