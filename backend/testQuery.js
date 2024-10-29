require('dotenv').config(); // Carga las variables de entorno desde .env
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'tu_usuario',
  password: process.env.DB_PASSWORD || '', // Asegúrate de que use la contraseña del .env
  database: process.env.DB_NAME || 'noticias_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos exitosa.');

  const query = 'SELECT * FROM noticias WHERE destacada = 1';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
    } else {
      console.log('Resultados de la consulta:', results);
    }
    db.end();
  });
});

