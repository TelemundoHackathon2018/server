var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = require('question');
var Show = require('shows');
var User = require('user');

var Quiz = new Schema({
    showName: Show.schema.obj,
    questions: [Question.schema.obj],
    username: User.schema.obj,
});

module.exports = mongoose.model("Quiz", Quiz);