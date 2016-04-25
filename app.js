'use strict';

const PORT = process.env.PORT || 4000;

var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('uuid');
var Grades = require('./models/grade');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('view engine', 'jade');


app.get('/', (req, res) => {
    console.log(' home page working');
    res.render('index');
    // res.send('test 1 home page');
});

app.use('/grade', require('./routes/grades'));

app.use((req, res, next) => {
    res.status(404).send('The file does not exist');
})


app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
