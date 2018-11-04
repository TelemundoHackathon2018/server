var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user'); 

var Show = new Schema({
    showName: String,
    schedule: Date,
    description: String,
    leaderboard: [User.schema.obj],
});

module.exports = mongoose.model("Show", Show);