const express = require('express');
const noticiasController = require('../controllers/noticiasController');
const multer = require('multer');

const router = express.Router();

// Configuración de multer para subir imágenes
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, process.env.UPLOADS_DIR); // Usar la variable de entorno para la ruta
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Ruta para buscar noticias por título o descripción
router.get('/buscar', noticiasController.buscarNoticias);

// Ruta para obtener noticias destacadas
router.get('/noticias-destacadas', noticiasController.getNoticiasDestacadas);

// Ruta protegida para crear noticias, usando multer para manejar el envío de archivos
router.post('/', upload.single('imagen'), noticiasController.createNoticia);

// Ruta para obtener todas las noticias
router.get('/', noticiasController.getNoticias);

// Ruta para obtener una noticia específica por ID
router.get('/:id', noticiasController.getNoticiaById);

// Ruta para actualizar una noticia con soporte para actualización de imágenes
router.put('/:id', upload.single('imagen'), noticiasController.updateNoticia);

// Ruta para eliminar una noticia
router.delete('/:id', noticiasController.deleteNoticia);

module.exports = router;

