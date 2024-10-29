const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const noticiasRoutes = require('./routes/noticiasRoutes');
const authRoutes = require('./routes/authRoutes');

// Cargar variables de entorno
dotenv.config();

const app = express();

// Configuración de CORS desde .env
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};
app.use(cors(corsOptions));

// Middleware para manejar JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta parametrizada en .env
app.use('/uploads', express.static(process.env.UPLOADS_DIR));

// Rutas de autenticación
app.use('/api', authRoutes); 

// Rutas de noticias
app.use('/api/noticias', noticiasRoutes);

// Iniciar el servidor con el puerto parametrizado
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});






