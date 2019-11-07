const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create table and properties

const EmployeeProperties = new Schema({
    name:{
        type:String,
        required:[true,"Employee name is needed."]
    },
    status:{
        type:String,
        required:[true,"Employee status needed."],
        default:"Probationary"
    },    
    attendance:{
        type:Int16Array,
        required:[true,"Enter number of days attended"]
    
    }



});

const Employees =   mongoose.model('employees',EmployeeProperties);
module.exports = Employees;