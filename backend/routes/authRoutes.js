const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController'); // Asegúrate de importar el controlador de autenticación
const router = express.Router();

// Ruta para el login
router.post('/login', authController.login);

// Ruta para verificar el token
router.get('/verifyToken', authMiddleware.verifyToken, (req, res) => {
  res.status(200).json({ message: 'Token válido' });
});

module.exports = router;
