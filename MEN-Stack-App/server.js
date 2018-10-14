const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db');


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));



// app.get('/', (req,res) => {
//   res.send('Go For It!!')
// });

app.get('/', (req,res) => {
  res.send('index.ejs')
})



app.listen(3000, (req, res) => {
  console.log('Ayy, Im workin here!!')
});
