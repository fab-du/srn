
var mongoose  = require('mongoose');
var crypto    = require('crypto');

var Schema = mongoose.Schema; 
var ObjectId  = Schema.ObjectId ;



var userReg = new Shema(

    {
        _id: { type: String }
        ,name: String
        ,vorname: String
        ,benutzerName: String
        ,email: { type: String }
        ,passphrase: { type: String
                        ,index:{ unique: true}}
    
    }

    );




var Document = new Schema ({
name: String
, link : Buffer /* Weg um data zu finden */ 

, documentType: Number
, proprietaire : String 
, usersWithShareAccess: [String] // store userNames of users with full access to doc
});



UserReg.virtual("password").set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
}).get(function() {
return this._password;
});

UserReg.method("authenticate", function(plainText) {
    return this.encryptPassword(plainText) == this.hashedPassword;
});

UserReg.method("makeSalt", function() {
    return Math.round((new Date().valueOf() * Math.random())) + '';
});

UserReg.method("encryptPassword", function(password) {
    return crypto.createHmac("sha1", this.salt)
.update(password).digest("hex");
});

/** end of virutal methods def */
/**
* define middleware for models here
*/
UserReg.pre("save", function(next) {
    if (!(this.firstName && this.lastName
    && this.email && this.userName)) {
    next(new Error("Invalid Params"));
    } else {
    next();
    }
});

UserReg.virtual("userName").get(function() {
return this["_id"];
});

UserReg.virtual("userName").set(function(userName) {
this["_id"] = userName;
});
/** end of definition of middleware here */
// export the models:
// i) UserReg
// ii) Document
mongoose.model("UserReg", UserReg);
mongoose.model("Document", Document);
