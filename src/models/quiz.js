var mongoose = require('mongoose');
var Schema = mongoose.Schema;
import {Question} from 'question';
import {Show} from 'shows';
import {User} from 'user';

var Quiz = new Schema({
    "showName": { type: Schema.Types.ObjectId, ref: 'Show' },
    "questions": [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    "username": { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model("Quiz", Quiz);