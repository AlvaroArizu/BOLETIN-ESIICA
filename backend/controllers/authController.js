const db = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Controlador para manejar el login
exports.login = (req, res) => {
  const { username, password } = req.body;

  // Buscar el usuario en la base de datos
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) return res.status(500).json({ error: 'Error del servidor' });
    if (results.length === 0) return res.status(401).json({ error: 'Usuario no encontrado' });

    const user = results[0];

    // Comparar contraseñas
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: 'Error del servidor' });
      if (!isMatch) return res.status(401).json({ error: 'Contraseña incorrecta' });

      // Crear el token JWT
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET,{ expiresIn: process.env.JWT_EXPIRES_IN });

      // Enviar el token en la respuesta JSON
      res.status(200).json({ token, message: 'Autenticación exitosa' });
    });
  });
};


