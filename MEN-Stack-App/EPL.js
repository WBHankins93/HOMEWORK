const mongoose = require('mongoose');

const clubsSchema = new mongoose.Schema({
  name : {type: String, required: true},
  city: {type: String, required: true},
  titlesWon: {type: Number},
  image: {type: String}
});

module.exports = mongoose.model('EPL', clubsSchema);
