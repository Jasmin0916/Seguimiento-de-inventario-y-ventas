const mongoose = require('mongoose');
const { empleadoSchema } = require('./schemas');

const userEmpleados = mongoose.model('Empleado', empleadoSchema);

module.exports = { userEmpleados };
