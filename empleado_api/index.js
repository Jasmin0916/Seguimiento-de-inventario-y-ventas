const express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://NodeJS:jasmin123@cluster0.fils71y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const port = 8081; 
const app = express();
app.use(express.json());

app.get('/', (req, res) => { res.send("I am alive UserAPI"); })

// Ruta para registrar un nuevo empleado
app.post('/empleados', async (req, res) => {
  try {
    const nuevoEmpleado = new Empleado(req.body);
    await nuevoEmpleado.save();
    res.status(201).send(nuevoEmpleado);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})