var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({});

module.export = mongoose.model("User", User);