'use strict';

var express = require('express');
var router = express.Router();


var Grade = require('../models/grade');


router.get('/', (req,res) =>{
    console.log("grades is routing");
    Grade.findAll(function(err,grades){
        if(err){
            return res.status(400).send(err);
        }

        res.render('grade',{grades:grades});
        // res.render('grade');
        // res.send(grades)
    });
});

router.post('/', (req,res) =>{
    console.log(req.body);
    Grade.create(req.body, err =>{
        res.send(err);
    });
});

router.delete('/:id', (req,res) => {
    console.log('delte routing');
    console.log(req.params.id);
    Grade.delete(req.params.id, (err) => {
        if(err){
            res.send(err);
        }
        res.send("delete is working");
    });
});


module.exports = router;
