var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var cors = require('cors');
var api = express();

var port = 4200;
require('./db.config');
var userRouter = require('./src/routes/userRouter');
var questionRouter = require('./src/routes/questionRouter');

api.use(cors());
api.use(bodyParser.urlencoded({extended: true}));
api.use(bodyParser.json());
api.use('/user', userRouter);
api.use('/question', questionRouter);


api.listen(port, function() {
    console.log('Server is runing on port: ', port);
});

module.exports = api;
