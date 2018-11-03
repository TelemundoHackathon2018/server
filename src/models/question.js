var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Question = new Schema({
    "question": String,
    "choices": {"A": String, "B": String, "C": String, "D": String},
    "correct": String,
});

module.exports = mongoose.model("Question", Question);