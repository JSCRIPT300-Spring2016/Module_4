'use strict';
var express = require('express');
var trucks = require ('./trucks');

var serveStatic = express.static( 'public' );
var bodyparser = require( 'body-parser' );

var app = express();

app.use( serveStatic );
app.use( bodyparser.urlencoded({ extended: false }) );
app.use( bodyparser.json() );

//return the list of all trucks
app.get('/trucks', function (request, response) {
  var truckList = trucks.getTrucks();

  response.send(truckList);
});

//return list of named trucks- url driven
app.get('/trucks/:name', function (request, response){
  var truck = trucks.getTruck(request.params.name);
  response.send(truck);
});

//return list of all food types
app.get('/food-types', function (request, response){
  var foodList = trucks.getFoodTypes();

  response.send(foodList);
});

//dynamic param return list off trucks by food type
app.get('/food-types/:type', function (request, response) {
  var type = request.params.type;
  var truckList = trucks.filterTrucksByFoodType(type);

  response.send(truckList);
});


app.listen(3000, function () {
 //console.log('server started on port 3000');
});


//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'
