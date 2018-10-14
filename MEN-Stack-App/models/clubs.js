const mongoose = require('mongoose');

// const clubsSchema = new mongoose.Schema({
//   name : {type: String, required: true},
//   city: {type: String, required: true},
//   titlesWon: {type: Number},
//   image: {type: String}
// });

const clubs = [
  {
    name: "Chelsea",
    city: "London",
    titlesWon: 5,
    image: " ",
  },
  {
    name: "Manchester United",
    city: "Manchester",
    titlesWon: 20,
    image: " "
  },
  {
    name: "Liverpool",
    city: "Liverpool",
    titlesWon: 18,
    image: ""
  },
]

// const Clubs = mongoose.model('Clubs', clubsSchema);

module.exports = clubs;
