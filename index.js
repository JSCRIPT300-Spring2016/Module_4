//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'
var stuffFromExpress = require('express');
var stuffFromTrucks = require('./trucks');
var app = stuffFromExpress();

// to use the "static" middle-ware, we call it from our express object
var serveStatic = stuffFromExpress.static('public');

// this will allow us to serve up static files from "public"
app.use(serveStatic);

/*************************************************************************
* Description: Map a placeholder variable to a callback which uses
*              the route '<routeIdentifier>/:name'
*************************************************************************/
app.param('name', function (request, response, next) {
  var objName = request.params.name;

  // Normalize the name of the object.
  request.objectName = objName[0].toUpperCase() +
    objName.slice(1).toLowerCase();

  next();
});

/*************************************************************************
* Description: This route returns a single truck object that matches the
*              name parameter passed in the route.
*************************************************************************/
app.get('/trucks/:name', function (request, response) {
  // Creating the request's objectName property
  var truckName = request.objectName;
  var truck = stuffFromTrucks.getTruck(truckName);

  if (!truck) {
    response.status(404).json('No truck found with the name: ' + truckName);
  } else {
    response.send(truck);
  }
});

/*************************************************************************
* Description: This route returns the list of all trucks in the module.
*************************************************************************/
app.get('/trucks', function (request, response) {
  var truckList = stuffFromTrucks.getTrucks();
  response.send(truckList);
});

/*************************************************************************
* Description: Map a placeholder variable to a callback which uses
*              the route '<routeIdentifier>/:type'
*************************************************************************/
app.param('type', function (request, response, next) {
  var objType = request.params.type;

  // Normalize the name of the object.
  request.objectType = objType[0].toUpperCase() +
    objType.slice(1).toLowerCase();

  next();
});

/*************************************************************************
* Description: This route returns the list of all trucks that serve the
*              food type that matches (case insensitive) the type parameter
*              passed in the route.
*************************************************************************/
app.get('/food-types/:type', function (request, response) {
  // Creating the request's objectType property
  var foodType = request.objectType;
  var truckList = stuffFromTrucks.filterTrucksByFoodType(foodType);

  if (!truckList) {
    response.status(404).json('No trucks found with the food type: ' + foodType);
  } else {
    response.send(truckList);
  }
});

/*************************************************************************
* Description: This route returns the list of all possible food types served
*              by trucks in the module.
*************************************************************************/
app.get('/food-types', function (request, response) {
  var foodTypeList = stuffFromTrucks.getFoodTypes();
  response.send(foodTypeList);
});

app.listen(3000, function () {});