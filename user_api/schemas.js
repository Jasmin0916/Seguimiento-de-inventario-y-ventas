const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  saldo: {
    type: Number,
    required: true,
  },
});

module.exports = { userSchema };
