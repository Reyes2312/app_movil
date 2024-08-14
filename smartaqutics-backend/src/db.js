const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'smartacuatic.neuroseeq.com',
  user: 'u475816193_inte',
  password: 'Smartinte12', 
  database: 'u475816193_app_movil',
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos con el id:', connection.threadId);
});

module.exports = connection;
