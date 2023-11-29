/** Application for bank.ly */

const express = require('express');
const { Sequelize } = require('sequelize');
const pgNative = require('pg-native');
const util = require('util'); 
const app = express();
const ExpressError = require('./helpers/expressError');

// import text-encoding only where needed
const { TextEncoder } = require('text-encoding');

global.TextEncoder = TextEncoder; 

const sequelize = new Sequelize('bankly', 'hilarienoes', 'Purple16', {
  host: 'localhost',
  dialect: 'postgres',
  dialectModule: pgNative,
});

//test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }); 

app.use(express.json());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

/** 404 handler */

app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function(err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;

