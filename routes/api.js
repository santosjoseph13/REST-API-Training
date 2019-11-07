const express = require('express');
const router = express.Router();

router.get('/employee',function(req,res){
res.send({type:'GET'})
});


router.post('/employee',function(req,res){
    console.log(req.body);
    res.send({
        type:'POST',
        name: req.body.name,
        status: req.body.status        

});
     

});


router.put('/employee/:id',function(req,res){
res.send({type:'PUT'})

});

router.delete('/employee:id',function(req,res){
res.send({type:'DELETE'})   

});

module.exports = router;