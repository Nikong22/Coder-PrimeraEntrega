const express = require("express");
const routes = require("./api/productos")
const carritos = require('./api/carrito');
const fs = require('fs')

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Servidor HTTP escuando en el puerto ${PORT}`));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes)
app.use("/api", carritos)

