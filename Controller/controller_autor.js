const autor = require('../Model/autor');

exports.obtenerAutor = (req, res) => {
    console.log(req.body.id_autor);
    autor.obtenerAutor((err, data) => {
        if (err) {
            res.status(500).json({ mensaje: 'Error' });
        }
        res.send(data);
    });
}
exports.crearNuevoAutor=(req,res) => {// Controlador para crear nuevo autor
  const nuevoAutor = new Autor({
    id_autor: req.body.id_autor,
    nombreAutor: req.body.nombre_autor
  })
  autor.crearNuevoAutor = (nuevoAutor,(error,data)=>{
    if (err) {
        res.status(500).json({ mensaje: 'Ocurrio error al crear el autor' });
    }
    res.send(data);
});
}
exports.eliminarAutor=(req,res)=>{ // Controlador para crear nuevo autor

    const borrarAutor = {
        id_autor: req.body.id_autor,
    }

    autor.eliminarAutor(borrarAutor,(error,data)=>{
        if (error) {
            res.status(500).json({ mensaje: 'Ocurrio un error al eliminar el Autor' });
    }else{
    res.send(data);
    }
});
}
exports.editarAutor = (req,res)=>{//COntrolador para editar Autor
  const idAutor = req.body.id_autor;
  const editarAutor = new autor(req.body);

  autor.editarAutor(idAutor,editarAutor,(error,data) => {
    if (error) {
      if(error.kind == 'not_found'){
        res.status(400).json({ mensaje: 'No se encontro el libro' });
      }else{
          res.status(500).json({ mensaje: 'Ocurrio un error al editar el Autor' });
      }
    }else{
      res.send(data);
      }
  });
};
