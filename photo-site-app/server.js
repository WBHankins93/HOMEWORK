const express = require('express');
const app = express();



// app.get('/', (req, res) => {
//   res.send('The app is ALIVEEEEEEE')
// });


//Create an index route
app.get('/', (req, res) => {
  res.render('index.ejs')
})


app.listen(3000, () => {
  console.log('Ayy Im workin here')
})
