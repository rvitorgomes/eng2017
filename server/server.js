const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const mountRoutes = require('./routes');

mountRoutes(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port', port);
});

module.exports = app;
