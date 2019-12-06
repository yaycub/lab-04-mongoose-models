const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  breed: {
    type: String,
    required: true
  },
  lives: {
    type: Number,
    required: true,
    min: 1,
    max: 9
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Cats', schema);
