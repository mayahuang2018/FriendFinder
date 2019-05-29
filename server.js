
//npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tells node to create an "express" server
var app = express();

// Sets an initial port. 
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(PORT, function(){
     console.log("App listening on PORT: "+PORT);
});