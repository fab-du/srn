var app = require('../app'); 
var mongoose = require('../db/setup.js'); 
var  expressValidator = require('express-validator'); 
var validate = require('../validator/validate.js');

exports.einloggen = function(req, res) {

  res.render('einloggen', { title: 'Einloggen' });
  console.log("REq come here");
};

exports.processPost = function (req, res) {

    validate.validate(req);
var errors = req.validationErrors();
console.log(errors);
if(!errors)
    res.send('No errors detected ');
    console.log(username, pass);
    //console.log(mongoose);
    //mongoose.setup();
};


