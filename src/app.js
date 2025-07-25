const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const notifHandler = require('./api');
const db = require("./db/mongo.js")

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/v1/notification', notifHandler);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
