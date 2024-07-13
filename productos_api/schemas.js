const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precioVenta: {
    type: Number,
    required: true,
  },
  precioCompra: {
    type: Number,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  tipoProducto: {
    type: String,
    enum: ['Dispositivos periféricos', 'Repuesto de laptops y computadoras', 'Repuesto de impresoras'],
    required: true,
  }
});

module.exports = { productoSchema };

