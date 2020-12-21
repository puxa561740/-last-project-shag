const path = require('path');
const express = require('express');
const app = express();

const pablickPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(pablickPath))

app.get('*', (reg, res) => {
  res.sendFile(path.join(pablickPath, 'index.html'));
});


app.listen(port, () => {
  console.log('SERVER IS WORKS!')
})
