// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// more routes for our API will happen here

let data = [
    {"temp" : "50", "sensor" : "heat", "timestamp" : "time"},
    {"temp" : "30", "sensor" : "light"},
    {"temp" : "14", "sensor" : "sound"},
    {"temp" : "12", "sensor" : "light"},
    {"temp" : "45", "sensor" : "heat"},
    {"temp" : "12", "sensor" : "sound"},
    {"temp" : "89", "sensor" : "heat"},
    {"temp" : "78", "sensor" : "sound"},
    {"temp" : "56", "sensor" : "light"}
]



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

function isAuthenticated(){

}

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', isAuthenticated(), function(req, res) {
    console.log("/ API")
    res.json({ message: 'hooray! welcome to our api!' });
});


/*
    API to fetch temperature and sensor data using
    @params : sensor
 */

router.get("/api/v1/temp", (req, res) =>{
    console.log("API working")
    let sensor = req.body.sensor;
    let result = [];
    for(let item of data){
        if(item.sensor == sensor){
            result.push(item);
        }
    }
    res.status(200).send(result);
});
