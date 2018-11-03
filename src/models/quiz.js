var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Quiz = new Schema({
    "showName": String,
    "questions": Array,
    "username": String,
});

module.export = mongoose.model("Quiz", Quiz);