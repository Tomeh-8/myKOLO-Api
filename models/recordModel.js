const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
  message: {
    type: String,
    trim: true,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add amount']
  },
  userID:{
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Account', RecordSchema);