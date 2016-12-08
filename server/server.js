var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/itemList', function() {
  
})
app.get('/itemList', function() {
  
})

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
})

module.exports = app;