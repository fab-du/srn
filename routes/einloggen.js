var mongoose = require('../db/setup.js'); 
var validate = require('../validator/validate.js');

var db = require('../db/setup.js');
var User = db.getUserModel();

exports.einloggen = function(req, res) {
  res.render('einloggen', { title: 'Einloggen' });
  console.log("REq come here");
};

exports.processPost = function (req, res) {
    console.log("We are processing");

    var newUser={};
    newUser.username= req.body.username; 
    newUser.password= req.body.password; 

    var richtig = validate.validate(req, newUser);
    console.log(richtig);

    if( richtig )
    {
        authentification(newUser); 
    }

};

function authentification( newUser ) {//{{{
    var isError = true; 

    User.findOne({"_id": newUser.username}, function (err, user) {
        if(err) {
            console.error("no user with this name");
        }
        else
        {
            //isError = user.authentificate(newUser.password);
            console.log(user);
        }
    });

    return isError; 
}//}}}

exports.userspace= function(req, res){
    res.render("app-template", {title: 'welcome user'});
};



