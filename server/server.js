var express = require('express');
var path = require('path');
var parser = require('body-parser');
var db = require('../db');


var app = express();

app.use(parser.json());

var newEvent = path.join(__dirname, '../db/event.js')
var itemList = path.join(__dirname, '../db/itemlist.js')


app.post('/eventTable', function(req, res, next) {
  newEvent.Event(req)
  .then(function(resp) {
    console.log('Added Event: ', resp);
  })
})
app.get('/eventTable', function(req, res, next) {
  newEvent.getAll()
  .then(function(resp)) {
    console.log('Got Events: ', resp);
  }
})


app.post('/itemList', function(req, res, next) {
  itemList.Item(req)
  .then(function(resp) {
    console.log('Added Item: ', resp);
  })
})
app.get('/itemList', function(req, res, next) {
  itemList.getAll()
  .then(function(resp) {
    console.log('Got Items: ', resp);
  })
})


app.listen(3000, function() {
  console.log('Server is listening on port 3000');
})

module.exports = app;