const mongoose = require('mongoose');
const { empleadoSchema } = require('./schemas');

const empleadosModel = mongoose.model('Empleado', empleadoSchema);

module.exports = { empleadosModel };
