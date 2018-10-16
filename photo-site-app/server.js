const express = require('express');
const app = express();
const bodyParser = require('body-parser')

require('./db/db')

const usersController = require('./controllers/users');

app.use(bodyParser.urlencoded({extended: false}))
// Set up middleWare for our controller
app.use('/users', usersController)


app.get('/', (req, res) => {
  res.render('index.ejs')
})


app.listen(3000, () => {
  console.log('Ayy Im workin here')
})
