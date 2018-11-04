//CRUD
var express = require('express');
var userRouter = express.Router();

var User = require('../models/user');

// create new user
userRouter.post('/add', function (req, res) {
  User.create({...req.body})
    .then(user => {
    res.json(user);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// fetch user data
userRouter.get('/', function(req, res){
    User.findOne({userName:req.query.userName})
    .then(User => res.send({ User: User }))
    .catch(e => res.send({ success: false, message: e.message }));
});

// update info
// userRouter.post('/update/', function(req, res){
//     User.update({...req.body})
//     User.findOne({userName:req.query.userName})
//     .then(User => res.send({ User: User }))
//     .catch(e => res.send({ success: false, message: e.message }));
// });


// update points
userRouter.post('/update-points/', function(req, res){
    User.findOne({userName:req.query.userName})
    .then(User => 
        User.updateOne({userName:req.query.userName}, {$set: {points: User.points + req.query.points }}),
        res.send({ User: User }))
    .catch(e => res.send({ success: false, message: e.message }));
});

// update favorite


// change password



module.exports = userRouter;