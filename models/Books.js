const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isFiction: {
    type: Boolean,
    required: true
  },
  pages: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model('Books', schema);
