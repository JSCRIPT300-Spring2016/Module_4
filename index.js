var express = require( 'express' );
var trucks = require( './trucks' );
var app = express();
var serveStatic = express.static( 'public' );

app.use( serveStatic );

app.get( '/trucks', function( request, response ) {

  var allTrucks = trucks.getTrucks();

  response.send( allTrucks );
});

app.get( '/trucks/:name', function( request, response ) {

  var truckName = request.params.name;
  var truck = trucks.getTruck( truckName );

  response.send( truck );
});

app.get( '/food-types', function( request, response ) {

  var foodList = trucks.getFoodTypes();

  response.send( foodList );
});

app.get( '/food-types/:type', function( request, response ) {

  var foodType = request.params.type;
  var truckList = trucks.filterByFoodType( foodType );

  response.send( truckList );
});

app.listen( 3000, function() {
  console.log('server started on port 3000');
});