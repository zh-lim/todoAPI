var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./service/models/model'), //created model loading here
  bodyParser = require('body-parser');

const mongoHostIP = "";


var cors = require('cors');
app.use(cors());
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://'+mongoHostIP+':27017/Tododb',{useNewUrlParser: true}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./service/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('RESTful API server started on: ' + port);