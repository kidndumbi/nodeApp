var express = require('express');

var app = express();


var test = "test";

console.log(test);

app.get('/user', function(req, res, ){

    res.send("i send info back to user");

});

app.get('/login', function(req, res, ){
    
        res.send({ID: 78, name: "cassava"});   
});


app.listen(7800, function(){

    console.log('connected to port 7800')
});