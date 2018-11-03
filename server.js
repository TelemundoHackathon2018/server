var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var cors = require('cors');
var mongoose = require('mongoose');

var port = 4200;

mongoose.Promise = require('bluebird');
mongooe.connect('mongodb://nbsee-admin:fiunbcu2018@nb-see-shard-00-00-1gn1a.gcp.mongodb.net:27017,nb-see-shard-00-01-1gn1a.gcp.mongodb.net:27017,nb-see-shard-00-02-1gn1a.gcp.mongodb.net:27017/test?ssl=true&replicaSet=NB-SEE-shard-0&authSource=admin&retryWrites=true')
    .then(() => {
        console.log("Start");
    })
    .catch(err => {
        console.error("Starting Error: ", err.stack);
        process.exit(1);
    });


var userRouter = require('./src/routes/userRouter');

express.use(cors);
express.use(bodyParser.urlencoded({extended: true}));
express.use(bodyParser.json());
express.use('/user', userRouter);