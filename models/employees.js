const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create table and properties
const GeoProperties = new Schema({
    
       
        type: {
          type: String,
          default: "Point"
        },
        coordinates: {
          type: [Number],
          index: "2dsphere"        
        }
});

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
        type:Number,
        required:[true,"Enter number of days attended"]
    
    },
    geometry: GeoProperties



});

const Employees =   mongoose.model('employees',EmployeeProperties);
module.exports = Employees;