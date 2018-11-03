//CRUD
var express = require('express');
var routers = express.Router();

var user = require('../models/user');

// create new user
userRouter.route('/add/post').post(function (req, res) {

  var user = new User(req.body);
      user.save()
    .then(user => {
    res.json(user);
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