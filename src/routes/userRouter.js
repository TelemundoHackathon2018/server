//CRUD
var express = require('express');
var userRouter = express.Router();

var User = require('../models/user');

// create new user
userRouter.post('/add', function (req, res) {
  console.log(req.body);
  console.log(User);
  User.create({...req.body})
    .then(user => {
    res.json(user);
    console.log('i made it');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


// update info


// update points


// update favorite


// change password



module.exports = userRouter;