# Module_4

Week 4

1. Fork this repository
2. Initialize your project using npm to create a **package.json** file.
3. Extend the trucks module, **trucks.js** provided with the following methods:

   `getTrucks` This method takes no parameters and returns a list of all the truck objects in the module. Sample usage:

   `var trucks = require('./trucks');`  
   `var truckList = trucks.getTrucks();`

   `getTruck(name)` This method takes one parameter, a string representing the name of a food truck. The function returns the truck object matching the name provided. Sample usage:

   `var truck = trucks.getTruck('Marination');`

   `getFoodTypes` This method takes no parameters and returns a list of all the food types offered by the various trucks in the module. Sample usage:

   `var foodList = trucks.getFoodTypes()`

   `filterTrucksByDay(day)` This method takes one parameter, a string representing a day of the week. The function returns the list of trucks open on the day provided. This is the method you implemented in Module_3. Sample usage:

   `var openTrucks = trucks.filterTrucksByDay('Saturday');`

   `filterTrucksByFoodType(foodType)` This method takes one parameter, a string representing a food type. The function returns the list of trucks that serve the provided type of food. Sample usage:

   `var pizzaTruckList = trucks.filterByFoodType('pizza');`

4. In **index.js** implement an express server that serves up static files from the public directory. Additionally, write GET handlers for the following two routes:

   `/trucks` This route returns the list of all trucks in the module.  
   `/trucks/:name` This route returns a single truck object that matches the name parameter passed in the route.  
   `/food-types` This route returns the list of all possible food types served by trucks in the module  
   `/food-types/:type` This route returns the list of all trucks that serve the food type that matches (case insensitive) the type parameter passed in the route.

5. Include your **.eslintrc** file as part of your repo. Your code should be lint-free based on your lint configuration.
6. Use a **.gitnore** file in your project locally, adding 'node_modules' to the file to prevent the inclusion of node_modules in your repo.