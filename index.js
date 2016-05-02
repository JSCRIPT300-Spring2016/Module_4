

var express = require('express');
var app = express();

//bind node modules to the following variables:
var dateObj = require('./enhanced-date');
var trucks = require('./trucks');

// "static" middle-ware function
var serveStatic = express.static('public');
app.use(serveStatic);

//This route returns the list of all trucks in the module.
//returns error 404 if truck list is empty or undefined
app.get('/trucks', function (request, response) {
console.log(trucks);
  var truckList = trucks.getTrucks();
  if (truckList.length === 0 || truckList === undefined){
    response.status(404).json('no trucklist found');
  } else {
    response.send(truckList);
  }	
});

//This route returns a single truck object that matches the name parameter passed in the route.  
app.get('/trucks/:name', function (request, response) {
  var truck = request.params.name; 
  var targetTruck = trucks.getTruck(truck);

  //targetTruck will be null if no food truck matches the 'name'
  if (targetTruck === null) {
    response.status(404).json('no truck of the name ' +
      truck + ' found.');
  } else {
    response.send(targetTruck);
  }	
});

//This route returns the list of all possible food types served by trucks in the module 
app.get('/food-types', function (request, response) {
  var foodArray = trucks.getFoodTypes();
  
  //foodArray will be an empty array if no food types are found in the data base
  if (foodArray.length === 0){
    response.status(404).json('no food list found');
  } else {
    response.send(foodArray);  
  }  
});

//This route returns the list of all trucks that serve the food type that matches 
//(case insensitive) the type parameter passed in the route.
app.get('/food-types/:type', function (request, response) {
  var foodType = request.params.type;
  var foodTrucks = trucks.filterTrucksByFoodType(foodType);
  
  //foodTrucks will be an empty array if no match is found
  if (foodTrucks.length === 0){
    response.status(404).json('no food trucks found that serve ' + foodType);
  } else {
    response.send(foodTrucks);  
  } 
});

app.listen(3000, function () {
console.log('server started on port 3000');
});