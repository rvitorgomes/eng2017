const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

const mountRoutes = require('./routes');
mountRoutes(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Application works!');
});

module.exports = app;
