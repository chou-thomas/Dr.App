var express = require('express');
var path = require('path');
var app = express();

var bodyParser = require('body-parser');

// allowing us to actually use our body-parser
app.use(bodyParser.json());

// communitcating with our static folder (angular code)
app.use(express.static(__dirname + "/client"));

// getting to the routes file
require('./server/config/mongoose.js')

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

var port = Number(process.env.PORT || 8000);
app.listen(port);
console.log("listening on port 8000")

