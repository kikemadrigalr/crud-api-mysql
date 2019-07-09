const express = require('express');

//importar router de express para manejo de rutas
const router = express.Router();

//importar conexion a bd
const mysqlConnection = require('../database');

//obtener todos los empleados, metodo get
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    }
    else {
      console.log(err);
    }
  });
});

//obtener un empleado por su id, metodo get
router.get('/:id', (req, res) => {
  const { id } = req.params;

  mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    }
    else {
      console.log(err);
    }
  });
});

// crear un empleado, metodo post
router.post('/', (req, res) => {

  const { id, name, salary } = req.body; //obtener los parametros que envia el cliente

  const query = `CALL employeedAddOrEdit(?, ?, ?);`;

  mysqlConnection.query(query,[id, name, salary], (err, rows, fields) => {
    if(!err){
      res.json({"Status": "Empleado Guardado"});
    }
    else{
      console.log(err);
    }
  });
});

//actualizar un empleado, se utiliza metodo put
router.put('/:id', (req,res) => {
  const { name, salary } = req.body;
  const { id } = req.params;
  const query = `CALL employeedAddOrEdit(?, ?, ?)`;

  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if(!err){
      res.json({"Status": "Empleado Actualizado"});
    }
    else{
      console.log(err);
    }
  });
});

//eliminar un empleado, metodo delete
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id],  (err, rows, fields) => {
    if(!err){
      res.json({"Status": "Empleado Eliminado"});
    }
    else{
      console.log(err);
    }
  });
});



module.exports = router;