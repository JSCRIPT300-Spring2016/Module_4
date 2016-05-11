/*
	Scott Henderson
	JSCRIPT 300 A Spring 2016
*/

// in this file create an express application - use the middle-ware built into express
// to serve up static files from the public directory (index.html and client.js - you
// can also serve up css files from the public directory this way if you want)
// you need to support a "/trucks" endpoint, and a dynamic route for "/trucks/:name"

var express = require("express");
var _ = require("lodash");
var trucks = require("./trucks");

// calling express creates an application instance
var app = express();

// a middle-ware function without a "mount" path gets executed on every request
app.use(function (request, response, next) {
	console.log("Time: ", Date.now());
	next();
}, function (request, response, next) {
	console.log("Request URL: ", request.originalUrl);
	next();
});

// this will allow us to serve up static files from "public"
// no further handling required
app.use(express.static("public"));

// return a list of all trucks
app.get("/trucks", function (request, response) {

	var truckList = trucks.getTrucks();
	var truckNameList = "All available food trucks:<br><br>";

	for (var i = 0; i < truckList.length; ++i) {
		truckNameList += truckList[i].name + "<br>";
	}

	response.send(truckNameList);
});

app.get("/trucks/:name", function (request, response) {

	var truck = trucks.getTruck(request.params.name);

	// truck will be undefined if no food truck matches "name"
	if (!truck) {
		response.status(404).json("Truck '" + request.params.name + "' not found.");
	} else {
		var formattedTruck = "";

		for (var p in truck) {
			formattedTruck += _.capitalize(p) + " : " + truck[p] + "<br>";
		}
		response.send(formattedTruck);
	}
});

app.get("/food-types", function (request, response) {

	var foodTypeList = trucks.getFoodTypes();

	// getFoodTypes will return an empty array if nothing was found.
	if (foodTypeList.length <= 0) {
		response.status(404).send("No food types found!");
	} else {
		var formattedFoodList = "All available food types:<br><br>";

		foodTypeList.sort();
		for (var i = 0; i < foodTypeList.length; ++i) {
			formattedFoodList += foodTypeList[i] + "<br>";
		}
		response.send(formattedFoodList);
	}
});

app.get("/food-types/:type", function (request, response) {

	var truckList = trucks.filterByFoodType(request.params.type);

	// truckList will be undefined if no food truck matches "type"
	if (!truckList) {
		response.status(404).json("No trucks found for food type '" +
			request.params.type + "'.");
	} else {
		var formattedTruckList = "Food trucks that serve " + request.params.type + ":<br><br>";

		truckList.sort();
		for (var i = 0; i < truckList.length; ++i) {
			formattedTruckList += truckList[i].name + "<br>";
		}
		response.send(formattedTruckList);
	}
});

// start the server
app.listen(3000, function () {
	console.log("server started on port 3000");
});
