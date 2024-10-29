const jwt = require('jsonwebtoken');

// Middleware para verificar el token desde los headers
exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization']; // Obtener el token desde el header

  if (!token) {
    return res.status(403).json({ error: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET); // Quitar "Bearer " si está presente
    req.user = decoded;  // Agregar la información del usuario a la solicitud
    next();  // Continuar al siguiente middleware o controlador
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
