const express  = require('express');
//const bodyparser = require('body-parser');

const attendance = express();

attendance.use(require('body-parser').json());

attendance.use('/api',require('./routes/api'));

attendance.listen(4000, function() {

    console.log('listening');
} );