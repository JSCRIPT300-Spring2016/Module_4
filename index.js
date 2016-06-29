'use strict';

var express = require('express');
var trucks = require('./trucks');

var app = express();

app.get('/trucks', function (req, resp) {
  var truckL = trucks.getTrucks();

  resp.send(truckL);
});

app.get('/trucks/:name', function (req, resp) {
  var truck = trucks.getTruck(req.params.name);

  resp.send(truck);
});

app.get('/food-types', function (req, resp) {
  var foodL = trucks.getFoodTypes();

  resp.send(foodL);
});

app.get('/food-types/:type', function (req, resp) {
  var type = req.params.type;
  var truckL = trucks.filterByFoodType(type);

  resp.send(truckL);
});

app.listen(3000, function () {
  console.log('listening on port 3000');
});