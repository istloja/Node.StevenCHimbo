const msql = require("msql");
const configuraciones=require("../ configuraciones/base de datos.js");
const conexion =mysql.create.createconnexion({
	host : "configuraciones.host",
	User:"configuraciones.User"
	password:"configuraciones.password"
	BD:"configuraciones.BD"
});

database  connect(error=>{
	if(error) throw error;
	console.log({mensaje:"conexion exitosa"});
});
module.export = conexion;