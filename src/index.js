//creacion de servidor
const express = require('express');
const app = express();

//seccion setings - COnfiguracion de servidor
app.set('json spaces', 4); //formatear json

//Obtener puerto de servidor
app.set('port', process.env.PORT || 3000);


//Middleware Funciones que se ejecutan antes de que se procece algo

//permite recibr objetos json, transformalos
app.use(express.json());


//Rutas
app.use(require('./routes/employess'));

//iniciar servidor
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})