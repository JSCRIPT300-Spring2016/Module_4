//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'

var trucks = require('./trucks');
var express = require('express');
var app = express();

var serveStatic = express.static('public');

app.use(serveStatic);

app.get('/trucks', function(req, res){
  res.send(trucks.getTrucks());
});

app.param('name', function(req, res, next){
  var truck = req.params.name;
  var foodtruck = trucks.getTruck(truck);
  req.foodtruck = foodtruck;
  next();
});

app.get('/trucks/:name', function(req, res){
  res.send(req.foodtruck);
});

app.get('/food-types', function(req, res){
  res.send(trucks.getFoodTypes());
});

app.param('type', function(req, res, next){
  var type = req.params.type;
  var food = type[0].toUpperCase() + type.slice(1).toLowerCase();
  var foodtype = trucks.filterByFoodType(food);
  req.foodtype = foodtype;
  next();
});

app.get('/food-types/:type', function(req, res){
  res.send(req.foodtype);
});

app.listen(3000, function(){
  /* eslint-disable no-console */
  console.log("Listening on port 3000");
  /* eslint-enable no-console */
});
