
module.exports = function ( app ){
    //Path Require 
    var path = require('path'); 
    //SetUp View 
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    return app; 
};  

