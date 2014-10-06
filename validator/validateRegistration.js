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
    var forEinlog = {};
    forEinlog.username = obj.username; 
    forEinlog.password = obj.password; 

    var test = false; 

    if (einlogValidator.validate( forEinlog )&& 
         obj.name !== null && 
         obj.vorname !== null && 
         obj.email !== null && validator.isEmail(obj.email))
     {
        test = true;  
     }
    else
    {
    }

    return test;  
}; 

