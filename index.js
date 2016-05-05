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
var foodTypes = require('./trucks');
var openTrucks = require('./trucks');
var typeTrucks = require('./trucks');
/* eslint-enable no-unused-vars */
/* eslint-enable no-undef */


var app = express();
var serveStatic = express.static('public');

var openTruck = trucks.filterTrucksByDay('Saturday');
var pizzaTruckList = trucks.filterTrucksByFoodType('pizza');

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
app.get('/trucks', function (request, response, next) {
  var truckList = trucks.getTrucks();
  response.send(truckList);
  next();
});

// `/trucks/:name` This route returns a single truck object that matches
// the name parameter passed in the route.
// http://127.0.0.1:3000/trucks:Fez
app.get('/trucks:name', function (request, response, next) {
  var truckReq = request.params.name;
  console.log('request[' + truckReq + ']');
  var truck = trucks.getTruck(truckReq);
  response.send(truck);
  next();
});

//  `/food-types` This route returns the list of all possible food types
// served by trucks in the module
// http://127.0.0.1:3000/foodTypes
app.get('/foodTypes', function (request, response, next) {
  var foodList = trucks.getFoodTypes();
  response.send(foodList);
  next();
});

// `/food-types/:type` This route returns the list of all trucks that serve the
// food type that matches (case insensitive) the type parameter passed.
// http://127.0.0.1:3000/foodTypes:Pizza
// http://127.0.0.1:3000/foodTypes:pizza
app.get('/foodTypes:type', function (request, response, next) {
  var typeReq = request.params.type;
  console.log('request[' + typeReq + ']');
  var type = trucks.filterTrucksByFoodType(typeReq);
  response.send(type);
  next();
});

// test for var openTrucks = require('./trucks');
app.get('/openTrucks', function (request, response) {
  response.send(openTruck);
});

// var typeTrucks = require('./trucks');
app.get('/typeTrucks', function (request, response) {
  response.send(pizzaTruckList);
});

app.listen(3000, function () {
  console.log('server started on port 3000');

});