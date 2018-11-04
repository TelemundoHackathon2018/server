var express = require('express');
var showRouter = express.Router();

var Show = require('../models/shows');
var User = require('../models/user');

// add new show
showRouter.post('/add', function (req, res) {
    User.findOne({userName:req.body.username})
    Show.create({...req.body})
    .then(show => {
    res.json(show);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


// get show
showRouter.get('/', function (req, res){
    Show.findOne({showName:req.query.showName})
    .then(Show => res.send({ Show: Show }))
    .catch(e => res.send({ success: false, message: e.message }));
});

module.exports = showRouter;


