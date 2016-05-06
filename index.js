var express = require('express');
var app = express();
var trucks = require('./trucks');
//
var truckList = trucks.getTrucks();
function getTrucks(){
  return trucks.foodTrucks;
}
//
var truck = trucks.getTruck();
function getTruck(){
  return getTrucks.name;
}
//
var foodList = trucks.getFoodTypes();
function getFoodTypes(){
  var foodTypes = [];
  var foodType = trucks.type;
  for (var i = 0; i< trucks.length; i++){
    if(foodType[i] !== foodTypes[i]){
      foodTypes.push(foodType);
    }
    else{
      return;
    }
  }
  
  return foodTypes;
}
//

app.get('/trucks', function (request, response){
  response.write(truckList);
  response.write(getTruck);
  response.write(foodList);
});

app.listen(3000);
