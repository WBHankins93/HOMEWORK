const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.get('/', (req, res) => {
  res.render('users/index.ejs');
})


// Make a route to add a new user
// call from new.ejs
router.get('/new', (req, res) => {
  res.render('users/new.ejs');
})


// Make a show route here
router.get('/:index', (req, res) => {
  User.findById(req.params.id, (err, showUser) => {
  res.render('/users/show.ejs', {
    users: showUser
  })
})
});

// Create a route that will post the new user data
// Connect the model to the .create function and call in the body
router.post('/', (req, res) => {
  User.create(req.body, (err, createdUser) => {
    console.log(req.body);
    console.log(createdUser, ' createdUser');
    if(err) {
      console.log(err)
    } else {
      res.redirect('/users')
    }
  })
})


module.exports = router;
