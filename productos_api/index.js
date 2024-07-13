const express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://NodeJS:jasmin123@cluster0.fils71y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const port = 8080; 
const app = express();
app.use(express.json());

app.get('/', (req, res) => { res.send("I am alive Producto"); })

// Ruta para registrar un nuevo producto
app.post('/productos', async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).send(nuevoProducto);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en ${port}`);
});