const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


// Require Mongoose database
require('./db/db');

// Require the Controller
const clubsControl = require('./controllers/clubControl')

// Middleware goes here
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Always call the controller at the end of the middle ware
// this will set up the controller route
app.use('/clubs', clubsControl);

app.get('/', (req, res) => {
  res.send('Welcome to the Club')
});

app.listen(3000, (req, res) => {
  console.log('Ayy, Im workin here!!')
});
