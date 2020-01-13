const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req, res)=>{
	console.log(req);
	res.json({mensaje:"Hola mundo y aprogramo en node "})
});
require("../servicios/rutas.js");

app.listen(1111, ()=>{
	console.log("Servidor Iniciado");
});
