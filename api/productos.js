const express = require("express");
const productos_controller = require('./controllers/productos.controller');

const { Router } = express;

let router = new Router();

router.get('/productos', function (req, res) {
  const productos = productos_controller.getProductos()
  res.json(productos);
});

router.get("/productos/:id", (req, res) => {
  const producto = productos_controller.getProducto(req, res)
  res.json(producto);
 });

router.post("/productos", function (req, res) {
  productos_controller.nuevoProducto(req);
  res.send("Producto Añadido");
});

router.put("/productos/:id", (req, res) => {
  productos_controller.actualizarProducto(req);
  res.send("Producto Actualizado");
});

router.delete("/productos/:id", (req, res) => {
  productos_controller.borrarProducto(req);
  res.send("Producto Borrado");
});

module.exports = router;