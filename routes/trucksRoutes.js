var express = require('express');
var trucksList = require('../trucks.js');

var router = express.Router();

router.route('/')
  .get(function (request, response) {
    var trucks = trucksList.getTrucks();
    response.status(200).json(trucks);
  })

  module.exports = router;
