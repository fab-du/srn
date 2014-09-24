
var path    = require('path');
var configs = require( './config.js'); 
var models = require('./model.js');
var User   = models.User; 
var mongoose = require('mongoose');

mongoose.connect(configs.db_config.database); 


var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){

    User.findOne({'name.first':'Fabrice'}, function(err, obj){
        if(err) return console.error(err);

        obj.pass.secure = "darwin" ;

        obj.save(function(err){ 
            if(err) return console.error(err);
            console.log(obj.login.password);
        })


    });

});


