const express  = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const attendance = express();
mongoose.connect('mongodb://localhost/employeego');
mongoose.Promise = global.Promise;

attendance.use(bodyparser.json());

attendance.use('/api',require('./routes/api'));

attendance.use(function(err,req,res,next){

//console.log(err)
res.send({message: err.message});
});

attendance.listen(4000, function() {

    console.log('listening');
} );