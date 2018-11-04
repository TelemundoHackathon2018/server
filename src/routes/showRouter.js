var express = require('express');
var showRouter = express.Router();

var Show = require('../models/shows');
var User = require('../models/user');

// add new show
showRouter.post('/add', function (req, res) {
    User.findOne({userName:req.body.username})
    .then(User => 
        Show.create({showName: req.body.showName,
                    schedule: req.body.schedule,
                    description: req.body.description,
                    leaderboard: [User]})
        .then(Show => {
        res.json(Show);
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
    }))
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// adding a user to the leaderboard
showRouter.put('/add-to-leaderboard', function (req, res) {
    User.findOne({userName:req.query.username})
    .then(User => 
        Show.findOne({showName: req.query.showName})
        .then(Show => {
            Show.leaderboard.push(User);
            Show.save((err, updatedLeaderboard) => {
                res.send(updatedLeaderboard);
            } )
        
        })
        .catch(err => {
        res.status(400).send("unable to save to database");
    }))
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


