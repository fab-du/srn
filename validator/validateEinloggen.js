var CustomValidators = require('./customValidators.js');

exports.validate = function (req) {
    req.checkBody('username', 'Mannnn tipp doch was ein').notEmpty();
    req.checkBody('password', 'Ist Das ein Password ????').isValidePass();
}; 
