const express = require('express');
const router = express.Router();

// require the model for our Controller
const Clubs = require('../models/clubs');

// Need to add Index route here
router.get('/', (req, res) => {
  Clubs.find({}, (err, allClubs) => {
    if (err) {
     console.log(err);
   } else {
     console.log(allClubs)
     res.render('index.ejs', {clubs: allClubs});
   }
 });
});

// Create a new route
// make a new.ejs file
// use app.get at default route
// render new.ejs
router.get('/new', (req, res) => {
  res.render('new.ejs')
});


// use app.post at the route of new page
// grab the body(info) of the form on new.ejs and console .log interval
// push the body into your clubs models
// redirect to your default route
router.post('/', (req, res) => {
  console.log(req.body),

// Rewrite original code to use mongodb
// use .creat on the model to add new data to model
  Clubs.create(req.body, (err, newClubs) => {
    if (err) {
      console.log(err)
    } else {
      console.log(newClubs);
      res.redirect('/clubs')
    }
  })
});

// use app.get at the route of the show page
// show route by Index
// use findById in the model to req.params
// render show route
// check the index parameters of the model
router.get('/:index', (req, res) => {
  console.log(req.params);
  Clubs.findById(req.params.index, (err, foundClubs) => {
    // console.log(foundClubs, ' foundClubs')
    res.render('show.ejs', {
      clubs: foundClubs
    })
  })
});


// use app.get at the route of the edit page
// show route by index and edit
// use findById in the model to req.params
// render edit route
router.get('/:index/edit', (req, res) => {
  Clubs.findById(req.params.index, (err, foundClubs) => {
    res.render('edit.ejs', {
      clubs: foundClubs
  })
  })
});


// use app.put at the route of the default index
// take the parameters of the model and set it equal to the body
// redirect to the default route
router.put('/:index', (req, res) => {
  Clubs[req.params.index] = req.body;
  res.redirect('/clubs');
})


module.exports = router;
