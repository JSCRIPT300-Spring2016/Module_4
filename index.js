//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'

var express = require('express');
var trucks = require('./trucks');
var truck = null;
var app = express();
var serverStatic = express.static('public');
app.use(serverStatic);
app.use(function(request,response,next){
  console.log('Time: ', Date.now());
  next();
});

String.prototype.capitalizeFirstLetter = function() {
  var str = this.toLowerCase();

  return str.charAt(0).toUpperCase() + str.slice(1);
};

app.get('/',function(request,response){
  response.send('Welcome to Food Trucks App');
});

app.get('/trucks',function(request,response){
  truck = trucks.getTrucks();
  if(typeof truck === 'undefined'){
    response.status(404).json('No Trucks found');
  }
  else{
    response.send(truck);
  }
});

app.get('/trucks/:name',function(request,response){
  var truckParam = request.params.name;
  truck = trucks.getTruck(truckParam);
  response.send(truck);
});

app.get('/schedule/:day',function(request,response){
  var truckParam = request.params.day;
  truck = trucks.filterTrucksByDay(truckParam.capitalizeFirstLetter());
  response.send(truck);
});

app.get('/food-types',function(request,response){
  truck = trucks.getFoodTypes();
  response.send(truck);
});

app.get('/food-types/:type',function(request,response){
  var truckParam = request.params.type;
  truck = trucks.filterByFoodType(truckParam.capitalizeFirstLetter());
  response.send(truck);
});

app.listen(3000,function(){
  console.log('Server started on port 3000');
});