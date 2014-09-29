var mongoose = require('../db/setup.js'); 
var validate = require('../validator/validate.js');

var einloggen = exports.einloggen = function(req, res) {
  res.render('einloggen', { title: 'Einloggen' });
  console.log("REq come here");
};

exports.processPost = function (req, res) {

    var wichButton = req.param('action');

req.method = 'get'; 

    if(wichButton == 'einloggen')
    {
        var obj = [ req.body.username, req.body.password];
        var errors = validate.validate(req, obj);
        
        if(!errors)
        {
            //open user space 
        }
        else 
        {
            res.redirect('/einloggen');
        }
    }
    else if( wichButton == 'index')
    {
        res.redirect('/'); 
    }
    else if(wichButton == 'registrieren')
    {
        res.redirect('/registration'); 
    }


};


