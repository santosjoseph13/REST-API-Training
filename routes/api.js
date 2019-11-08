const express = require('express');
const router = express.Router();
const Employees = require('../models/employees');

router.get('/employee',function(req,res,next){
res.send({type:'GET'})
});


router.post('/employee',function(req,res,next){

    Employees.create(req.body).then(function(employee){
        res.send(employee);

    }).catch(next);

});


router.put('/employee/:id',function(req,res,next){

    Employees.findByIdAndUpdate({_id:req.params.id},req.body).then(function(employee){
        Employees.findOne({_id:req.params.id}).then(function(employee){
            res.send(employee);

            });

      });

});

router.delete('/employee/:id',function(req,res,next){

Employees.findByIdAndRemove({_id:req.params.id}).then(function(waw){
res.send(waw);
    });

});

module.exports = router;