'use strict';

const express = require('express');
const notFound = require('./err-handlers/404');
const errorHandler = require('./err-handlers/500');
// const validator = require('./middleware/validator');

const PORT = process.env.PORT || 3002;

console.log('hellooo');

const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('hello');
});

app.get('/person', (req, res, next) => {
  res.status(200).send('person with no name')
});

// app.use(validator);


app.get('/bad', (req, res, next) => {
  next('this route is bad');
});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = {app, start};
