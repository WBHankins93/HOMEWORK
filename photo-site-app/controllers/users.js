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

// Create a route that will post the new user data
// router.post()


module.exports = router;
