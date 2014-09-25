
var validate_einloggen = require('./validateEinloggen.js');
var validate_registration = require('./validateRegistration.js');


exports.validate = function (req) { /*The req object come from the router*/
   
    if(req.path == "/einloggen") 
    {
        validate_einloggen.validate(req);
    }
    else if( req.path == "/registration")
    {
        validate_registration.validate(req);
    }
    else
    {
        //Do nothing for now  
    }


    //End of the module
};


