'use strict';

var db = require('../config/db');
var uuid = require('uuid');


db.run('create table if not exists grades (id text, name text , score integer, total integer, mygrade text)');

exports.create = function(grade , cb){

    db.serialize(function(){
        var stmt = db.prepare("INSERT INTO grades VALUES (?, ?, ?, ?,?)");
        stmt.run( uuid(), grade.name, grade.score, grade.total, grade.mygrade);
        stmt.finalize(function(err){
            cb(err, grade);
        });
    });
};

exports.findAll = function(cb){
        db.all("select * from grades", function(err, grades){
            cb(err, grades);
        });
};

exports.delete = function(id, cb){
    console.log('delete routing');
    db.run(`delete from grades where id='${id}'`, function(err){
        if(err) return cb(err);
        cb(null);
    });

};
