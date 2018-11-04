var express = require('express');
var questionRouter = express.Router();

var Question = require('../models/question');

// create new user
questionRouter.post('/add', function (req, res) {
  Question.create({...req.body})
    .then(q => {
    res.json(q);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// fetch user data

// update info



// update points


// update favorite


// change password



module.exports = questionRouter;