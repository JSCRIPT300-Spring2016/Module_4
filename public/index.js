/*
	Scott Henderson
	JSCRIPT 300 A Spring 2016
*/


//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'

var express = require("express");

// calling express creates an application instance
var app = express();

// to use the "static" middle-ware, we call it from our express object
var serveStatic = express.static('public');

// this will allow us to serve up static files from "public"
app.use(serveStatic);

// the get function creates a route that accepts HTTP GET requests
app.get('/trucks', function (request, response) {
	response.redirect('/food-trucks');
});

app.get('/food-trucks', function (request, response) {
	var trucks = '<ul><li>Crisp Creperie</li><li>Ezell\'s Express</li>' +
				 '<li>Marination</li></ul>';
	response.send(trucks);
});

// start the server
app.listen(3000, function () {
	console.log('server started on port 3000');
});
