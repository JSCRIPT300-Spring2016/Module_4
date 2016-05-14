//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you
//  can also serve up css files from the public directory this way if you want)
//  you need to support a "/trucks" endpoint, and a dynamic route for "/trucks/:name"

var express = require("express");
var trucks = require("./trucks");
var app = express();

var serveStatic = express.static("public");
app.use(serveStatic);
 
app.get("/trucks", function(request, response) {
    var truckStr = "";
    var truckArray = trucks.getTrucks();
    for (var i = 0; i < truckArray.length; i++) {
        truckStr += truckArray[i].name + "<br>";
    }

    response.send(truckStr);
});

app.param("day", function(request, response, next) {
    var day = request.params.day;
    var truck = trucks.filterTrucksByDay(day);
    request.truck = truck;
    next();
});

app.get("/trucks/day/:day", function(request, response) {
    var truckStr = "";
    var truckArray = request.truck;
    for (var i = 0; i < truckArray.length; i++) {
        truckStr += truckArray[i].name + "<br>";
    }

    response.send(truckStr);
});

app.param("name", function(request, response, next) {
    var name = request.params.name.toLowerCase();
    var truck = trucks.getTruck(name);
    request.truck = truck;
    next();
});

app.get("/trucks/:name", function(request, response) {
    response.send(request.truck);
});

app.get("/food-types", function(request, response) {
    var truckStr = "";
    var truckSet = trucks.getFoodTypes();
    var setIter = truckSet.values();
    for (var i = 0; i < truckSet.size; i++) {
        truckStr += setIter.next().value + "<br>";
    }

    response.send(truckStr);
});

app.param("type", function(request, response, next) {
    var food = request.params.type.toLowerCase();
    var foodTypes = trucks.filterByFoodType(food);
    request.foodTypes = foodTypes;
    next();
});

app.get("/food-types/:type", function(request, response) {
    var truckStr = "";
    var truckArray = request.foodTypes;
    for (var i = 0; i < truckArray.length; i++) {
        truckStr += truckArray[i] + "<br>";
    }

    response.send(truckStr);
});

app.listen(3000, function() {
    // eslint-disable-next-line no-console
    console.log("Listening on port 3000");
});

