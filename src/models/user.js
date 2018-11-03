var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    "firstName": String,
    "lastName": String,
    "points": Number,
    "favorites": Array,
    "email": String,
    "password": String,
    "userName": String,
    "social": {
        "facebook": Schema.Types.Mixed,
        "google": Schema.Types.Mixed,
        "twitter": Schema.Types.Mixed,
        "instagram": Schema.Types.Mixed,
    }
});

module.export = mongoose.model("User", User);