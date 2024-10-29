# Proyecto de Boletín de Noticias

Este proyecto incluye un frontend (React) y un backend (Node.js) para manejar un administrador de noticias. El backend se conecta a una base de datos MySQL, y el frontend se comunica con el backend a través de una API.

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


## Iniciar el Backend (Node.js)

1. **Navegar a la carpeta del backend**:

'bash'
cd backend
'bash'

2. **Instalar dependencias del backend** (solo si no lo has hecho antes):

'bash'
npm install
'bash'

3. **Iniciar el servidor backend**:

'bash'
node app.js
'bash'

El servidor backend estará corriendo en `http://localhost:3001`.

---

## Iniciar el Frontend (React)

1. **Navegar a la carpeta del frontend**:

'bash'
cd frontend
'bash'

2. **Instalar dependencias del frontend** (solo si no lo has hecho antes):

'bash'
npm install
'bash'

3. **Iniciar la aplicación React**:

'bash'
npm start
'bash'

El servidor frontend estará corriendo en `http://localhost:3000`.

---

## Resumen de comandos

### Backend:
'bash'
cd backend
npm install   # Solo la primera vez
node app.js
'bash'

### Frontend:
'bash'
cd frontend
npm install   # Solo la primera vez
npm start
'bash'
