var user_name_regex = /^[a-zA-Z\-]+$/ ;

var foo = exports.validate = function validate( obj_to_validate ) {
    var obj = obj_to_validate; 
    var test = false; 
    var user_name = obj[0];
    var password  = obj[1];

    if(  user_name != null &&
        user_name.length > 6 &&
        user_name_regex.test(user_name) &&
        password != null &&
        password.length > 12) 
    {
        test = true; 
    }
    else
    {
    
    }
    return test; 
};

var obj = [ "fabricedufils", "Lemeilleur1798kldsflka"];

console.log(foo(obj));

