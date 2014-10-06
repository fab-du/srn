
var mongoose = require('mongoose'),//{{{
    Schema   = mongoose.Schema, 
    ObjectId = Schema.ObjectId, 
    crypto   = require('crypto');


var User = new Schema({


_id : {type: String}, // _id = username 
salt: String, 

name: String, 
vorname: String, 

email: {type: String }, /* We dont ask more personnal info since we are not facebook */

hashedPassword: {type : String, index: {unique: true}}

});//}}}


//User.pre("save", function (next) {//{{{
    ////if(!(this.username && this.password && this.email && this.name && this.vorname)) 
        ////{
            ////next(new Error("Invalid Param"));
        ////}
        ////else
        ////{
            ////next();
        ////}
//});//}}}

User.virtual("id").get(function(){//{{{
    return this["_id"].toHexString();
});//}}}

User.virtual("username").set(function(userName){
    this["_id"] = userName; 
});

User.method("encryptPassword", function(password) {
    return crypto.createHmac("sha1", this.salt ).update(password).digest("hex");
});



User.virtual("password").set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
}).get(function() {
    return this._password;
});

User.method("makeSalt", function() {
    return Math.round((new Date().valueOf() * Math.random())) + '';
});


User.method("authentificate", function(plainText) {
    return this.encryptPassword(plainText) == this.password; 
});
    
exports.User = mongoose.model('User', User);

