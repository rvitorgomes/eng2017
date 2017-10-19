const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(process.env.PORT || 4200);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

console.log('Application Listening!');

module.exports = app;
