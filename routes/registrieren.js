var mongoose = require('../db/setup.js');
var validate = require('../validator/validate.js');
var User = mongoose.getUserModel();


exports.registration = function(req, res) {
  res.render('registrieren', { title: 'Registration' });
};

exports.processPost = function(req, res){

    var errors={};
    var richtig=true; 
    var newUser={};

    newUser.username= req.body.username; 
    newUser.password= req.body.password; 
    newUser.email   = req.body.email; 
    newUser.name    = req.body.name; 
    newUser.vorname = req.body.vorname; 

    richtig = validate.validate(req, newUser);
    console.log("cest juste", richtig);

    if(richtig)
    {
        authentification(errors, newUser);
    }

};


function authentification( errors, foo ) {

    console.log(foo);
        var isError=true; 

        User.find({"_id" : foo.username}, function(err, users) {
            if (users.length > 0) {
                errors["userNameTaken"] = "The username '" + 
                    foo.username + "' is already taken";
                isError = true;
                
            } else {
                // save the user
                var newCryptUser = new User();

                for (var key in foo) {
                    newCryptUser[key] = foo[key];
                }

                newCryptUser.save(function(err) {
                    if (err) {
                        return console.error(err)
                    } 
                        console.log("user have been added"); 
                });
                
            }
        });        
        
        return isError; 
}

