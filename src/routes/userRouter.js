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
userRouter.put('/update-points/', function(req, res){ 
    User.findOne({userName:req.query.userName})
    .then(User => {
        User.points += parseInt(req.query.points);
        User.save((err, updatedUser) => {
            res.send(updatedUser);
        } )
    }
    )
    .catch(err => console.log(err));
});



module.exports = userRouter;