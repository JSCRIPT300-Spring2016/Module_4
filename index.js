//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'
/*
** Author: Fulin shen
** Created on: May 02, 2016
** Description:
*/

var express = require('express');
var app = express();
var trucks = require('./trucks');

app.get('/trucks', function(request, response){
  response.status(200).json(trucks.getTrucks());
});

app.get('/trucks/:name', function(request, response){
  var truckName = request.params.name;
  response.status(200).json(trucks.getTruck(truckName));
});

app.get('/food-types', function(request, response){
  response.status(200).json(trucks.getFoodTypes());
});

app.get('/food-types/:type', function(request, response){
  var foodType = request.params.type;
  response.status(200).json(trucks.filterTrucksByFoodType(foodType));
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});
