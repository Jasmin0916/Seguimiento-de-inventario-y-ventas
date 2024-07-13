const mongoose = require('mongoose');
const { productoSchema } = require('./schemas');

const productoModel = mongoose.model('Producto', productoSchema);

module.exports = { productoModel };
