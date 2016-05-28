'use strict';

var express = require('express');
var DateObj = require('./enhanced-date');
var trucks = require('./trucks');

var app = express();

app.get('/', function (request, response) {
  var headerText = 'Today is ' + DateObj.getDayName() + ', ' +
    DateObj.getMonthName() + ' ' + DateObj.getExactDay() +
		'. The food trucks available are: <ul>' ;

  var filteredTrucks = trucks.filterByDay('Monday');
  var i;
  for (i = 0; i < filteredTrucks.length; i++) {
    headerText = headerText + '<li> ' + filteredTrucks[i].name + '</li>';
  };

  headerText = headerText + '</ul>';

  response.send(headerText);
});

app.get('/trucks', function (request, response) {
  var truckDetails = trucks.getTruck('El Animal');
  
  response.send(truckDetails);
})

app.listen(3000, function () {
  console.log('server started on port 3000');
});