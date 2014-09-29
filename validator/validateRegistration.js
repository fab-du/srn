var validator       = require('validator');
var einlogValidator = require('./validateEinloggen.js'); 

/*********************************************
 *
 *validation_obj[0] ==> user_name 
 *validation_obj[1] ==> password 
 *validation_obj[2] ==> name 
 *validation_obj[3] ==> vorname 
 *validation_obj[4] ==> email 
 *
 **********************************************/

exports.validate = function ( validation_obj ) {
    var obj = validation_obj; 
    var forEinlog = [ obj[0], obj[1] ];
    var test = false; 

    if (einlogValidator.validate( forEinlog )&& 
         obj[2] !== null && 
         obj[3] !== null && 
         obj[4] !== null && validator.isEmail(obj[4]))
     {
        test = true;  
     }
    else
    {
    }

    return test;  
}; 

