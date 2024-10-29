
# Proyecto de Boletín de Noticias

Este proyecto fue diseñado para la **Universidad de Morón**, específicamente para el **Decanato de la Escuela Superior de Ingeniería, Informática y Ciencias Agroalimentarias (ESIICA)**.

Incluye un frontend (React) y un backend (Node.js) para manejar un administrador de noticias. El backend se conecta a una base de datos MySQL, y el frontend se comunica con el backend a través de una API.

## Requisitos previos

1. [Node.js](https://nodejs.org/) (v12 o superior)
2. [XAMPP](https://www.apachefriends.org/es/index.html) o MySQL instalado
3. [MySQL Workbench](https://www.mysql.com/products/workbench/) (opcional)
4. [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/) (opcional)

## Configuración del Proyecto

El proyecto tiene dos partes: **backend** y **frontend**. Se deben inicializar y ejecutar por separado.

### Backend (Node.js)

El backend está construido en Node.js y utiliza MySQL como base de datos.

#### 1. Clonar el repositorio o descargar el proyecto

```bash
git clone <URL_DEL_REPOSITORIO>
cd backend
```

#### 2. Instalar dependencias del backend

```bash
npm install
```

#### 3. Iniciar el servidor backend

```bash
node app.js
```

El servidor backend estará corriendo en `http://localhost:3001`.

---

### Frontend (React)

1. **Navegar a la carpeta del frontend**:

```bash
cd frontend
```

2. **Instalar dependencias del frontend**:

```bash
npm install
```

3. **Iniciar la aplicación React**:

```bash
npm start
```

El servidor frontend estará corriendo en `http://localhost:3000`.

---

## Resumen de comandos

### Backend:

```bash
cd backend
npm install   # Solo la primera vez
node app.js
```

### Frontend:

```bash
cd frontend
npm install   # Solo la primera vez
npm start
```

---

## Dependencias utilizadas

### Frontend

- **React**: ^18.3.1
- **Bootstrap**: ^5.3.3
- **Axios**: ^1.7.7
- **React Router DOM**: ^6.27.0

### Backend

- **Express**: ^4.21.1
- **MySQL**: ^2.18.1
- **Dotenv**: ^16.4.5
- **Cors**: ^2.8.5

Este proyecto fue desarrollado por **Álvaro Arizu** para el **Decanato de ESIICA de la Universidad de Morón**.

