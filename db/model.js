
var mongoose = require('mongoose'),//{{{
    Schema   = mongoose.Schema, 
    ObjectId = Schema.ObjectId, 
    crypto   = require('crypto');


var User = new Schema({
salt: String, 
name:{
    first: String, 
    second: String, 
}, 

info:{
    email: {type: String 
            ,unique: true}/* We dont ask more personnal info since we are not facebook */
}, 

login:{
    userName: {type: String, 
                unique: true} 
    ,password: String 
}

});//}}}


User.pre("save", function (next) {//{{{
    if(!(this.login.userName && this.login.password 
        && this.info.email && this.name.first && this.name.second)) 
        {
            new(new Error("Invalid Param"));
        }
        else
        {
            next();
        }
});//}}}

User.virtual("userName").get(function(){
    return this["_id"];
});


User.virtual("userName").set(function(userName){
    this["_id"] = userName; 
});

User.method("encryptPassword", function(password) {
    return crypto.createHmac("sha1", this.salt ).update(password).digest("hex");
});

User.virtual("pass.secure").set(function(pass) {
    this._password = pass;
    this.salt = this.makeSalt();
    this.login.password = this.encryptPassword(pass);
});

/**
 *
 *
 */
User.method("makeSalt", function() {
    return Math.round((new Date().valueOf() * Math.random())) + '';
});


/**
 *
 *
 */
User.method("authentificate", function(plainText) {
    return this.encryptPassword(plainText) == this.password; 
});
    
exports.User = mongoose.model('User', User);

