var path    = require('path');//{{{
var configs = require( './config.js'); 
var models = require('./model.js');
var User   = models.User; 
var mongoose = require('mongoose');
var db = mongoose.connection; 



exports.setup = function () {
mongoose.connect(configs.db_config.database); 
db.on('error', console.error.bind(console, 'connection error:'));//}}}
    db.once('open', function(){
        console.log("DB ist open");
    });
};

exports.getUserModel = function(){
    return User; 
}

exports.getDBInstance = function(){
    return db; 
}

