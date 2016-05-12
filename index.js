/*eslint-env node*/

//express
var express = require('express');
var app = express();

//trucks
var foodTrucks = require('./trucks');

//static
var serveStatic = express.static('public');
app.use(serveStatic);

//underscore
var _ = require('underscore');

//return all trucks
app.get('/trucks', function (request, response) {

    //trucks
  var trucks = foodTrucks.getTrucks();
  var output = 'All<br><br>';

    //loop to get name of each truck
  _.each(trucks, function(truck){
    output += truck.name + '<br>';
  });

    //return html
  response.send(output);
});

//return a truck
app.get('/trucks/:name', function (request, response) {

    //get the truck
  var truck = foodTrucks.getTruck(request.params.name);

  if (truck) {
        //yay found truck
    response.send(truck);
  } else {
        //sorry no truck
    response.status(404).json('no truck found: ' + request.params.name);
  }
});

//return food types
app.get('/food-types', function (request, response) {

    //types
  var types = foodTrucks.getFoodTypes();
  var output = 'All Types<br><br>';

    //loop to get type
  _.each(types, function (type) {
    output += type + '<br>';
  });

    //return all the types
  response.send(output);
});

//return trucks of a type
app.get('/food-types/:type', function (request, response) {

    //get the trucks that match the type
  var trucks = foodTrucks.filterByFoodType(request.params.type);

  if (trucks.length) {
    response.send(trucks);
  } else {
    response.status(404).json('no truck found: ' + request.params.name);
  }
});

app.listen(3000, function () {
    /* eslint-disable no-console */
  console.log('food trucks and stuff started: port 3000');
});