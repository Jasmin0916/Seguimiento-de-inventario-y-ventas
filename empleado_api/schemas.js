const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
  apellidoPaterno: {
    type: String,
    required: true,
  },
  apellidoMaterno: {
    type: String,
    required: true,
  },
  nombres: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
  },
  correo: {
    type: String,
  }
});

module.exports = { empleadoSchema };
