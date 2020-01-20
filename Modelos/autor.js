const mysql= require("../base de datos.js//db.js")
const autor= function(Autor){
this.id_autor=Autor.id_autor;
this.nombre_autor=Autor.nombre_autor;
};
//crear metodo de Obtener todo
autor.Obtenertodo=result =>{
mysql.query("SELECT * FROM autor",(err,res)=>{
if(eror){
console.log(error,"error consulta");
  result(null,error);
  return;
  }
console.log(res);
result(null,res);  
      }
    );
};
module.exports=autor;
