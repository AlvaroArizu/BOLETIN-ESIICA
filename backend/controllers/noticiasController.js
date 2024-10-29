const db = require('../models/db');

// Obtener todas las noticias
exports.getNoticias = (req, res) => {
    const query = 'SELECT * FROM noticias';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener las noticias' });
        }
        res.status(200).json(results);
    });
};

// Obtener una noticia específica por ID
exports.getNoticiaById = (req, res) => {
    const { id } = req.params;  // Obtener el ID de la noticia desde los parámetros de la URL
    
    const query = 'SELECT * FROM noticias WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener la noticia' });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Noticia no encontrada' });
        }
        res.status(200).json(result[0]);  // Devolver el primer (y único) resultado
    });
};

// Crear una noticia
exports.createNoticia = (req, res) => {
    const { titulo, copete, descripcion, destacada } = req.body; // Agregamos copete aquí
    const imagen = req.file ? `/uploads/${req.file.filename}` : null;  // Ruta de la imagen subida
    const fechaPublicacion = new Date(); // Obtener la fecha actual

    if (!titulo || !descripcion || !copete) {
        return res.status(400).json({ error: 'Los campos título, copete y descripción son obligatorios' });
    }

    const query = `INSERT INTO noticias (titulo, copete, descripcion, imagen, destacada, fechaPublicacion) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(query, [titulo, copete, descripcion, imagen, destacada, fechaPublicacion], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al insertar la noticia' });
        }
        res.status(201).json({ message: 'Noticia publicada exitosamente' });
    });
};

// Actualizar una noticia
exports.updateNoticia = (req, res) => {
    const { id } = req.params;
    const { titulo, copete, descripcion, destacada } = req.body;
  
    // Verificar si hay una nueva imagen o mantener la imagen existente
    const imagen = req.file ? `/uploads/${req.file.filename}` : req.body.imagen; 
  
    const query = `UPDATE noticias SET titulo = ?, copete = ?, descripcion = ?, imagen = ?, destacada = ? WHERE id = ?`;
    db.query(query, [titulo, copete, descripcion, imagen, destacada, id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Error al actualizar la noticia' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Noticia no encontrada' });
      }
      res.status(200).json({ message: 'Noticia actualizada exitosamente' });
    });
  };
  
// Eliminar una noticia
exports.deleteNoticia = (req, res) => {
    const { id } = req.params;

    const query = `DELETE FROM noticias WHERE id = ?`;
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error al eliminar la noticia' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Noticia no encontrada' });
        }
        res.status(200).json({ message: 'Noticia eliminada exitosamente' });
    });
};

exports.getNoticiasDestacadas = (req, res) => {
    const query = 'SELECT * FROM noticias WHERE destacada = 1';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener las noticias destacadas' });
        }
        if (!results || results.length === 0) {
            return res.status(404).json({ error: 'No hay noticias destacadas disponibles' });
        }
        res.status(200).json(results);
    });
};

// Buscar noticias por título o descripción
exports.buscarNoticias = (req, res) => {
    const searchTerm = req.query.q;
    const query = searchTerm
      ? `SELECT * FROM noticias WHERE titulo LIKE ? OR descripcion LIKE ?`
      : `SELECT * FROM noticias`;

    db.query(query, [`%${searchTerm}%`, `%${searchTerm}%`], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener las noticias' });
        }
        res.status(200).json(results);
    });
};

  
  

