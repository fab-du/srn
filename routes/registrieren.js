var mongoose = require('../db/setup.js');
var validate = require('../validator/validate.js');


exports.registration = function(req, res) {
  res.render('registrieren', { title: 'Registration' });
};

exports.processPost = function(req, res){

    var obj = [ req.body.username, req.body.password, 
                req.body.name, req.body.vorname, 
                req.body.email ];
            var errors  = validate.validate(req, obj);

    if(!errors){
        console.log(errors);
        mongoose.setup();
        var User = mongoose.getUserModel();

        var foo = new User(
        {
            salt: "SalutMan309829384", 
            name:{
                    first: req.body.name, 
                    second: req.body.name, 
                }, 

            info:{
                    email: req.body.email /* We dont ask more personnal info since we are not facebook */
                 }, 

            login:{
                    userName: req.body.username, 
                    password: req.body.password 
            }
        });

        foo.save( function (err) {
            if(err) return console.error(err);
            console.log("new user have been registered");
        } );
    }
    else /*fehler occur*/
    {
    
    }
};



