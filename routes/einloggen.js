var app = require('../app'); 
var mongoose = require('../db/setup.js'); 

exports.einloggen = function(req, res) {

  res.render('einloggen', { title: 'Einloggen' });
  console.log("REq come here");
};

exports.processPost = function (req, res) {
    var username = req.body.username; 
    var pass = req.body.password; 
    console.log(username, pass);
    //console.log(mongoose);
    //mongoose.setup();
};


