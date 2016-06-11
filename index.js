//Emma Luk
//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'
//// do an npm init to create your initial package.json
// npm init
// use the --save switch to add express as one of your project's dependencies
// npm install --save express
// files: jscript300-spring2016\Module_4\my_project1
// cd jscript300-spring2016\Module_4\my_project1
// node index.js
// ref: http://expressjs.com/en/guide/using-middleware.html and REST_Express.pdf

'use strict';

var express = require('express');
var trucks = require('./trucks');

var app = express();

app.use(function (request, response, next) {
    console.log('Time: ', Date.now());
    next();
},

function (request, response, next) {
    console.log('Request URL: ', request.originalUrl);
    next();
});

app.use(express.static("public"))

// /trucks This route returns the list of all trucks in the module.

app.get('/trucks', function (request, response) {
    var truckList = trucks.getTrucks();
    response.send('All available food trucks: ' + truckList + '<br/>' + '\n');
});

// /trucks/:name This route returns a single truck object that matches the name parameter passed in the route.

app.get('/trucks/:name', function (request, response) {

    var truck = trucks.getTruck(request.params.name);
    response.send('All available food Name: ' + truck);
});

// /food-types This route returns the list of all possible food types served by trucks in the module

app.get('/food-types', function (request, response) {
    var foodTypeList = trucks.getFoodTypes();
    response.send('All available food type: ' + foodTypeList);
});

// /food-types/:type This route returns the list of all trucks that serve the food type that matches (case insensitive) the type parameter passed in the route.
app.get('/food-types/:type', function (request, response) {

    var foodType = trucks.filterByFoodType(request.params.type);
    if (!truckList) {
        response.status(404).json('No trucks found for food type');
    }
    response.send(foodType);
});

// start the server
app.listen(3000, function () {
    console.log("server started on port 3000");
});

