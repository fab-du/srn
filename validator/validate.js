
var validate_einloggen = require('./validateEinloggen.js');
var validate_registration = require('./validateRegistration.js');


exports.validate = function (req , obj_to_validate) { /*The req object come from the router*/
   
    if(req.path == "/einloggen") 
    {
       return validate_einloggen.validate( obj_to_validate );
    }
    else if( req.path == "/registration")
    {
        return validate_registration.validate( obj_to_validate );
    }
    else
    {
        return; 
    }

    return; 
};


