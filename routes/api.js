const express = require('express');
const router = express.Router();
const Employees = require('../models/employees');

router.get('/employee',function(req,res){
res.send({type:'GET'})
});


router.post('/employee',function(req,res){

    Employees.create(req.body).then(function(employee){
        res.send(employee);

    });    

});


router.put('/employee/:id',function(req,res){
res.send({type:'PUT'})

});

router.delete('/employee:id',function(req,res){
res.send({type:'DELETE'})   

});

module.exports = router;