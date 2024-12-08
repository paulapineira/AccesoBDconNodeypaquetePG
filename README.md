##Pasos para ejecutar el desafio

Instalar las Dependencias: Ejecuta npm install para crear la carpeta node_modules

Configurar las siguientes variables con tus datos (esto se debe hacer en el index.js):

user=your_postgres_user
host=localhost
database=your_database_name
password=your_postgres_password
port=5432

Crear las Tablas en PostgreSQL: Conectaser a la base de datos PostgreSQL y ejecuta las consultas SQL proporcionadas para crear las tablas necesarias según el desafío:

CREATE DATABASE likeme;
CREATE TABLE posts (id SERIAL, titulo VARCHAR(25), img VARCHAR(1000),
descripcion VARCHAR(255), likes INT);

Iniciar el Proyecto: Ejecuta npm start o node index.js para correr el servidor.

Recordar usar el apoyo desafio Like Me parte 1 e iniciar el proyecto de react
