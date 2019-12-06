const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  publishedOn: {
    type: Number,
    required: true,
    min: 1970,
    max: 2019
  },
  players: {
    type: Number,
    required: true,
    max: 16
  }
});

module.exports = mongoose.model('Games', schema);
