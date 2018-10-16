const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('The app is ALIVEEEEEEE')
})


app.listen(3000, () => {
  console.log('Ayy Im workin here')
})
