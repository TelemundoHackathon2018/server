var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Show = new Schema({
    "showName": String,
    "schedule": Date,
    "description": String,
    "leaderboard": Array,
});

module.export = mongoose.model("Show", Show);