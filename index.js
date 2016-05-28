'use strict';
//  in this file create an express application
//  use the middle-ware built into express
//  to serve up static files from public directory (index.html & client.js)
//  you can also serve up css files from the public directory  if you want)
//  you need to support '/trucks' endpoint
// and dynamic route for '/trucks/:name'

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

var express = require('express');
var trucks = require('./trucks');

/* eslint-enable no-unused-vars */
/* eslint-enable no-undef */

var app = express();
var serveStatic = express.static('public');
app.use(serveStatic);

/* eslint-disable no-console */

app.use(function (request, response, next) {
  console.log('Request URL: ', request.originalURL);
  next();
});

app.use(function (request, response, next) {
  console.log('Time: ', Date.now());
  next();
});

//   `/trucks` This route returns the list of all trucks in the module.
// http://127.0.0.1:3000/trucks
app.get('/trucks', function (request, response) {
  var truckList = trucks.getTrucks();
  response.send(truckList);
});

// `/trucks/:name` This route returns a single truck object that matches
// the name parameter passed in the route.
// http://127.0.0.1:3000/trucks:Fez
app.get('/trucks/:name', function (request, response) {
  var truckReq = request.params.name;
  console.log('request[' + truckReq + ']');
  var truck = trucks.getTruck(truckReq);

  //var foodTruck = truckReq[0].toUpperCase + truckReq.slice(1).toLowerCase();

  if (!truck) {
    response.status(404).json('No food type found for ' + truck);
  } else {
    response.send(truck);
  }
});

//  `/food-types` This route returns the list of all possible food types
// served by trucks in the module
// http://127.0.0.1:3000/foodTypes
app.get('/food-types', function (request, response) {
  var foodList = trucks.getFoodTypes();
  response.send(foodList);
});

// `/food-types/:type` This route returns the list of all trucks that serve the
// food type that matches (case insensitive) the type parameter passed.
// http://127.0.0.1:3000/foodTypes:Pizza
// http://127.0.0.1:3000/foodTypes:pizza
app.get('/food-types/:type', function (request, response) {
  var typeReq = request.params.type;
  console.log('request[' + typeReq + ']');
  var type = trucks.filterTrucksByFoodType(typeReq);
  if (!type) {
    response.status(404).json('No food type found for ' + type);
  } else {
    response.send(type);
  }
});

// test for var openTrucks = require('./trucks');
app.get('/openTrucks', function (request, response) {
  var openTruck = trucks.filterTrucksByDay('Saturday');
  response.send(openTruck);
});

app.listen(3000, function () {
  console.log('server started on port 3000');

});