//  in this file create an express application - use the middle-ware built
// into express to serve up static files from the public directory (index.html
// and client.js - you can also serve up css files from the public directory
// this way if you want) you need to support a '/trucks' endpoint, and a
// dynamic route for '/trucks/:name'
var express = require('express');
var trucks = require('./trucks.js');
var truckList = trucks.getTrucks();
var foodList = trucks.getFoodTypes();
var truck;
var foodKind;
var app = express();

app.use(express.static('public'));

app.param('name', function (request, response, next) {
  truck = request.params.name;
  var foodTruck = truck[0].toUpperCase() + truck.slice(1).toLowerCase();
  request.foodTruck = foodTruck;
  next();
});

app.param('type', function (request, response, next) {
  foodKind = request.params.type;
  var foodType = foodKind;
  request.foodType = foodType;
  next();
});

app.get('/trucks/:name', function (request, response) {
  var foodType = trucks.getTruck(request.foodTruck);
  if (!foodType) {
    response.status(404).json('No food type found for ' + truck);
  } else {
    response.send(foodType);
  }
});

app.get('/trucks', function (request, response) {
  response.send(truckList);
});

app.get('/food-types/:type', function (request, response) {
  var foodTruck = trucks.filterByFoodType(request.foodType);
  if (!foodTruck) {
    response.status(404).json('No trucks found for ' + request.foodType);
  } else {
    response.send(foodTruck);
  }
});

app.get('/food-types', function (request, response){
  response.send(foodList);
});

app.listen(3000, function () {
  /*eslint-disable */
  console.log('server started on port 3000');
  /*eslint-enable */
});
