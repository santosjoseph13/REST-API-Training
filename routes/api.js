const express = require('express');
const router = express.Router();

router.get('/employees',function(req,res){
res.send({type:'GET'})
});

router.post('/employees',function(req,res){
    res.send({type:'POST'})
    
});

router.post('/employees',function(req,res){
    res.send({type:'POST'})

});


router.put('/employees/:id',function(req,res){
res.send({type:'PUT'})

});

router.delete('/employees:id',function(req,res){
res.send({type:'DELETE'})

});

module.exports = router;