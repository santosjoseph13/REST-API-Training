const express  = require('express');


const attendance = express();



attendance.use('/api',require('./routes/api'));

attendance.listen(4000, function() {

    console.log('listening');
} );