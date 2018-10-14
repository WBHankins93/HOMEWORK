const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Clubs = require('./models/clubs')

// Require Mongoose database
require('./db/db');

// Middleware goes here
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


// Need to add Index route here
app.get('/clubs', (req, res) => {
  res.render('index.ejs', {
    clubs: Clubs
  })
});

// app.get('/clubs', (req,res) => {
//   res.render('index.ejs', {clubs: Clubs})
// });


app.listen(3000, (req, res) => {
  console.log('Ayy, Im workin here!!')
});
