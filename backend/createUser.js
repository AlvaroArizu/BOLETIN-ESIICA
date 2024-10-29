/*const bcrypt = require('bcrypt');
const db = require('./models/db');  // Conexión a la base de datos

const username = 'admin';  // Nombre de usuario
const password = 'admin123';  // Contraseña que será encriptada

// Encriptar la contraseña
bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;

  // Insertar el usuario en la base de datos
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, hash], (err, result) => {
    if (err) throw err;
    console.log('Usuario creado exitosamente');
    db.end();  // Cerrar la conexión a la base de datos
  });
});


const bcrypt = require('bcrypt');
const db = require('./models/db');  // Ruta correcta a tu archivo db.js

const username = 'admin';
const newPassword = 'alvaro1245';  // La nueva contraseña que deseas usar

bcrypt.hash(newPassword, 10, (err, hash) => {
  if (err) throw err;

  const query = 'UPDATE users SET password = ? WHERE username = ?';
  db.query(query, [hash, username], (err, result) => {
    if (err) throw err;
    console.log('Contraseña actualizada exitosamente');
  });
});

*/

