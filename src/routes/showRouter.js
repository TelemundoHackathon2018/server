var express = require('express');
var showRouter = express.Router();

var Show = require('../models/shows');

// add new show
showRouter.post('/add', function (req, res) {
    Show.create({...req.body})
    .then(show => {
    res.json(show);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


// get show
showRouter.get('/get/show/:showName', function (req, res){
    Show.findOne(req.params.showName, function (err, show){
        if(err){
            console.log(err);
        }
        else{
            res.json(show);
        }
    })
});

module.exports = showRouter;


