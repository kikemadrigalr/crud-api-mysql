//crear objeto de conexxion a BD
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'kikemadrigal',
  password: 'cm894765',
  database: 'company'
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }
  else {
    console.log('DB is connected');
  }
});

module.exports = mysqlConnection;

//la conexion se utilizara en las rutas (archivo employees)