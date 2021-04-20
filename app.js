const express = require('express');
const path = require('path');
const joi = require('joi'); //validator
const movies = require('./movies');

const app = express();
app.use(express.json()); //middleware
app.use('/abc', movies); //http://localhost:3000/abc/api/movies/

app.get('/', (req, res) => {
  res.send('Hello Everyone from nodemon');
});

const port = process.env.PORT || '3000';
app.listen(port, () => {
  console.log(`Listening to PORT: ${port}`);
});
