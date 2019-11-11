const express  = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const attendance = express();

attendance.use(require)
mongoose.connect('mongodb://localhost/employeego',{ useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

attendance.use(express.static('public'));
attendance.use(bodyparser.json());

attendance.use('/api',require('./routes/api'));



attendance.use(function(err,req,res,next){

//console.log(err)
res.send({message: err.message});
});

attendance.listen(8080, function() {

    console.log('listening');
} );