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

// Create a new route
// make a new.ejs file
// use app.get at default route
// render new.ejs
app.get('/clubs/new', (req, res) => {
  res.render('new.ejs')
});


// use app.post at the route of new page
// grab the body(info) of the form on new.ejs and console .log interval
// push the body into your clubs models
// redirect to your default route
app.post('/clubs', (req, res) => {
  console.log(req.body),
  Clubs.push(req.body)
  res.redirect('Clubs')
});

// use app.get at the route of the show page
// show route by Index
// render show route
// check the index parameters of the model
app.get('/clubs/:index', (req, res) => {
  res.render('show.ejs', {
    clubs: Clubs[req.params.index]
  })
});


// use app.get at the route of the edit page





app.listen(3000, (req, res) => {
  console.log('Ayy, Im workin here!!')
});
