// src/server.js

const express = require('express');
const histogramRoutes = require('./routes/histogramRoutes');

const app = express();

app.use('/histogram', histogramRoutes);

module.exports = app;
