const express = require('express');
const cors = require('cors');
const { empleadosModel } = require('./models');
const mongoose = require('mongoose');

const uri = "mongodb+srv://NodeJS:jasmin123@cluster0.fils71y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const port = 8081;

mongoose.connect(uri);

const app = express();

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["POST"]
}));

app.get('/', (req, res) => {
  res.send("I am alive EmployeesAPI");
});

app.get('/employees', async (req, res) => {
  try {
    const employees = await empleadosModel.find({});
    res.json(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ruta para registrar un nuevo empleado
app.post('/employees', async (req, res) => {
  try {
    console.log("arriba", req.body);
    const { apellidoPaterno, apellidoMaterno, nombres, dni, telefono, direccion, correo } = req.body;
    console.log("abajo", req.body);
    const newEmployee = new empleadosModel({
      apellidoPaterno,
      apellidoMaterno,
      nombres,
      dni,
      telefono,
      direccion,
      correo
    });

    const data = await newEmployee.save();
    return res.status(201).json(data);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
