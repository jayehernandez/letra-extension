const express = require('express');

const app = express();

const morgan = require('morgan');

app.use(morgan('dev'));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

const letraRoutes = require('./routes/letra');

app.use('/', letraRoutes);

module.exports = app;
