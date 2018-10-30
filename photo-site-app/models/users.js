const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  image: String,
  comments: String
})


module.exports = mongoose.model('User', userSchema);
