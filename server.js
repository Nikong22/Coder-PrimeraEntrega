const express = require("express");
const routes = require("./api/productos")
const carritos = require('./api/carrito');
const fs = require('fs')

const app = express();
const PORT = 8080;
const http = require("http").Server(app);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes)
app.use("/api", carritos)

let server;
server = http.listen(PORT, () =>
  console.log(`Servidor HTTP escuando en el puerto ${PORT}`)
);

