const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isAlDente: {
    type: Boolean,
    required: true
  },
  howMany: {
    type: Number,
    required: true,
    min: 50
  }
});


module.exports = mongoose.model('Noodles', schema);
