//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'
'use strict';

var trucks = require('./trucks');
var express = require('express');
var app = express();

var serveStatic = express.static('public');
app.use(serveStatic);

// (/trucks) This route returns the list of all trucks in the module.

app.get('/trucks', function (request, response) {
  var allTrucks = trucks.getTrucks();
  response.send(allTrucks);
});

// (/trucks/:name) This route returns a single truck object that matches the name parameter passed in the route.

app.get('/trucks/:name', function (request, response) {
  var truckParam = request.params.name;
  var truckName = trucks.getTruck(truckParam);
  response.send(truckName);
});

// (/food-types) This route returns the list of all possible food types served by trucks in the module

app.get('/food-types', function (request, response) {
  var allFoodTypes = trucks.getFoodTypes();
  response.send(allFoodTypes);
});

// (/food-types/:type) This route returns the list of all trucks that serve the food type that matches (case insensitive) the type parameter passed in the route.
app.get('/food-types/:type', function (request, response) {
  var foodParam = request.params.type;
  var foodType = trucks.filterByFoodType(foodParam);
  response.send(foodType);
});

app.listen(3000, function () {
});
