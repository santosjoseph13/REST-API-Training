const express = require('express');
const router = express.Router();
const Employees = require('../models/employees');

router.get('/employee/',function(req,res,next){
  /*   Employees.find({}).then(function(employee){
        res.send(employee);

    }).catch(next); */ 
    Employees.aggregate().near({
        near:[parseFloat(req.query.lng),parseFloat(req.query.lat)],
        maxDistance: 100000,spherical:true,distanceField: "dis"
    }).then(function(employee){
        res.send(employee);
    });
 /*    Employees.find({"name":req.query.name}).then(function(employee){
        res.send(employee); */

        
    });
    
 


    
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