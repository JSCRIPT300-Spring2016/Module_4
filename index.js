//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'

var express = require('express');
var trucks = require('./trucks');

var app = express();

app.use(express.static('public'));

// /trucks This route returns the list of all trucks in the module
app.get('/trucks', function(request, response) {
  var foodTrucks = trucks.getTrucks();
  response.send(foodTrucks);
});

// /trucks/:name This route returns a single truck object that matches the name parameter passed in the route
app.get('/trucks/:name', function(request, response) {
  var truckName = request.params.name;
  var truck = trucks.getTruck(truckName);
  if (truck.length > 0) {
    response.send(truck);
  } else {
    response.send('That truck drove away!');
  }
});

// /food-types This route returns the list of all possible food types served by trucks in the module
app.get('/food-types', function(request, response) {
  var foodTypeList = trucks.getFoodTypes();
  response.send(foodTypeList);
});

// /food-types/:type This route returns the list of all trucks that serve the food type that matches (case insensitive) the type parameter passed in the route
app.get('/food-types/:type', function(request, response) {
  var type = request.params.type;
  var type = type[0].toUpperCase() + type.slice(1, type.length);
  var matchingTrucks = trucks.filterTrucksByType(type);
  if (matchingTrucks.length > 0) {
    response.send(matchingTrucks);
  } else {
    response.send('Oh no! You can\'t eat that from a truck!');
  }
});

app.listen(3000, function() {
  console.log('3000');
});
