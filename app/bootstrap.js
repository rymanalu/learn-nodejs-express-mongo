const express = require('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const databaseConfig = require('../config/database');
const bodyParser = require('body-parser');

mongoose.connect(
  databaseConfig.connection, {config: databaseConfig.config}
);

app.use(bodyParser.json());
app.use(routes);
//app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;
