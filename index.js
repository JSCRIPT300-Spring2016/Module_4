//  in this file create an express application - use the middle-ware built into express
//  to serve up static files from the public directory (index.html and client.js - you 
//  can also serve up css files from the public directory this way if you want)
//  you need to support a '/trucks' endpoint, and a dynamic route for '/trucks/:name'

var express = require('express');
var app = express();
// to use static middleware, we call it from our express object

//app.get('/', function (request, response){
//  response.write('Hello again');
//  response.end;
//});
//var serveStatic = express.static('public');
//
//app.use(serveStatic);
// this will allow us to serve static from public

//app.get('/trucks', function (request, response){
//  response.redirect('/food-trucks');
//});
//creates redirect/ property of express' response object


//app.use(function(request, response, next){
//  console.log('Time: ', Date.now());
//  next();
//});

//app.use(function(request, response, next){
//  console.log('Time: ', Date.now());
//  next();
//},//can take multiple functions as arguments when separated by ,
//  function(request, response, next){
//  console.log('Request URL: ', request.originalUrl);
//  next();
//});

//app.get('/food-trucks', function (request, response){
//  response.send('on the /food-trucks route')
//});
//app.use(function(request, response, next){
//  console.log('Request URL: ', request.originalUrl);
//  next();
//});
//
//app.use(function(request, response, next){
//  console.log('Time: ', Date.now());
//  next();
//});
//
//app.get('/trucks', function (request, response){
//  var trucks = '<ul><li>a</li><li>b</li>' +
//      '<li>c</li><li>d</li></ul>';
//  response.send(trucks);
//});
////'/trucks' is a route this is a route handler
//
//app.use(function(request, response, next){
//  console.log('Time: ', Date.now());
//  next();
//});//this doesn't work here because it's after the route handler

var trucks = {
  '314 Pie': 'Pie',
  'Crisp Creperie': 'French',
  'Express': 'Southern',
  'Marions': 'Korean',
  'Maximus Minimus': 'BBQ'
};
app.use(express.static('public'));

app.param('name', function(request, response, next){
  var truck = request.params.name;
  var foodTruck = truck[0].toUpperCase() + truck.slice(1).toLowerCase();
  request.foodTruck = foodTruck;
  next();
});
  
app.get('/trucks/:name', function(request, response, next){  
  var foodType = trucks[request.foodTruck];
  
  if(!foodType){//checks to ensure the param is found on the object
    response.status(404).json('No food type for ' +
                             request.params.name);//error handling
  }
  else {
    response.send(foodType);
  }
});

//app.get('/trucks/:name', function(request, response){
//  var truck = request.params.name;//the name parameter will be available on the request object
//  var foodType = trucks[truck];
//  var foodTruck = truck[0].toUpperCase() + truck.slice(1).toLowerCase();//formats input to capitalize
//  
//  if(!foodType){//checks to ensure the param is found on the object
//    response.status(404).json('No food type for ' +
//                             request.params.name);//error handling
//  }
//  else {
//    response.send(foodType);
//  }
//});


app.listen(3000, function(){//callback function
  console.log('server started on 3000');
});


























































