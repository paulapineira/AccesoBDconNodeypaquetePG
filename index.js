const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

// Configuracion de la conexión a postgres (Estas son las credenciales que tengo en pgadmin se deben colocar los datos dependiendo de como esta configurado el usuario)
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "likeme",
  password: "postgres",
  port: 5432,
});

// Ruta para get donde obtengo todos los dats
app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    res.json(result.rows); // se devuelven los registros como json
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener los posts :C");
  }
});

// Ruta para post donde agrego un nuevo post
app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body;  // recordatorio: la url viene del proyecto de React en el apoyo desafio  
  
    const img = url;  // en la base de datos no se llama url si no img, asi que igualo para que coincida con la columna de la bd
  
    console.log("Datos recibidos:", { titulo, img, descripcion });
  
    try {
      const result = await pool.query(
        "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *",
        [titulo, img, descripcion, 0]  // inserta img en vez de url para que coincida con la bd y mientras los likes quedan en 0
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error al agregar el post X.X");
    }
  });
  

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
