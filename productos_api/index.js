const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { productoModel } = require('./models');

const uri = "mongodb+srv://NodeJS:jasmin123@cluster0.fils71y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const port = 8080;

mongoose.connect(uri);

const app = express();
app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["POST"]
}));

app.get('/', (req, res) => {
  res.send("I am alive Producto");
});

// Listar todos los productos
app.get('/productos', async (req, res) => {
  try {
    const productos = await productoModel.find({});
    res.json(productos);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Registrar un nuevo producto
app.post('/productos', async (req, res) => {
  try {
    const { nombre, precioVenta, precioCompra, cantidad, tipoProducto } = req.body;

    const newProduct = new productoModel({
      nombre,
      precioVenta,
      precioCompra,
      cantidad,
      tipoProducto
    });

    const data = await newProduct.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en ${port}`);
});
