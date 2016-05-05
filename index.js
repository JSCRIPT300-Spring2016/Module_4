//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'
var express = require('express');
var app = express();
var trucks = require('./trucks');



app.use(express.static('public'));

app.use('/trucks', function (request, response, next){
/*  var getTrucks = function(){
    return foodTrucks.toString();
  };
	var truckList = trucks.getTrucks();
	console.log(truckList);*/
	return truckList;
	next();
});

app.get('/trucks', function (request, response) {
  return truckList;
});

app.get('/trucks/:name', function (request, response) {
  var truck = request.params.name;
  var foodName = trucks[name];
  // capitalize first letter, make everything else lowercase
  var foodTruck = truck[0].toUpperCase() + truck.slice(1).toLowerCase();
  if (!foodName) {
  response.status(404).json('No food name found for ' + truck);
  } else {
  response.send(foodName);
  }
});

app.get('/food-types', function (request, response){
  console.log(food=types);
});

app.get('/food-types/:type', function (request, response){
    var truck = request.params.name;
  var foodType = trucks[truck];
  // capitalize first letter, make everything else lowercase
  var foodTruck = truck[0].toUpperCase() + truck.slice(1).toLowerCase();
  if (!foodType) {
  response.status(404).json('No food type found for ' + truck);
  } else {
  response.send(foodType);
  }
});
app.listen(3000, function () { console.log('listening on port 3000'); });