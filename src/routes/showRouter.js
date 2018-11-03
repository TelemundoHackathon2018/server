//CRUD
var express = require('express');
var routers = express.Router();

var Show = require('../models/shows');

// add new show
showRouter.route('/add/show').post(function (req, res) {

  var show = new Show(req.body);
      show.save()
    .then(show => {
    res.json(show);
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


// get show
showRouter.route('/get/show/:showName').get(function (req, res){
    Show.findOne(req.params.showName, function (err, show){
        if(err){
            console.log(err);
        }
        else{
            res.json(show);
        }
    })
})


