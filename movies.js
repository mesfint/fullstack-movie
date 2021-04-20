const express = require('express');

const route = express.Router();

const movies = [
  {
    id: 1,
    name: "Star Wars'",
  },
  {
    id: 2,
    name: "Changeling'",
  },
  {
    id: 3,
    name: "The Help'",
  },
  {
    id: 4,
    name: "Taken'",
  },
];

route.get('/api/movies', (req, res) => {
  res.send(movies);
});

route.get('/api/movies/:id', (req, res) => {
  let movie = movies.find((c) => c.id === parseInt(req.params.id));
  if (!movie) {
    res.send(`No Movies found Id: ${req.params.id} `);
  } else {
    res.send(movie);
  }
});

route.post('/api/movies', (req, res) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
  });
  const result = schema.validate(req.body);

  console.log(result);

  //This validation is not efficient, so we need library=> joi
  /*   if (!req.body.name || req.body.name.length < 3) {
      res.status(400).send('The Name of Movie is not or less than 3 characters ');
      return;
    } */
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  let movie = {
    id: movies.length + 1,
    name: req.body.name,
  };
  movies.concat(movie);
  res.send(movie);
});

//Update data http put

route.put('/api/movies/:id', (req, res) => {
  //find movie based on id
  let movie = movies.find((c) => c.id === parseInt(req.params.id));
  if (!movie) {
    //if not found throw error
    res.send(`No Movies found Id: ${req.params.id} `);
  }
  //Validation for request
  const schema = joi.object({
    name: joi.string().min(3).required(),
  });
  const result = schema.validate(req.body);

  console.log(result);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  //Once validated update the Movies
  movie.name = req.body.name;
  //return that movie
  res.send(movie);
});

route.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

//Delete Movies
route.delete('/api/movies/:id', (req, res) => {
  //If not there throw error

  //Find the movie based on ID
  let movie = movies.find((c) => c.id === parseInt(req.params.id));

  //If Its there find the index of  the objecy in array
  const index = movies.indexOf(movie);
  //Remove that object from that Index
  movies.splice(index, 1);
  req.send(movie);
});

module.exports = route;
