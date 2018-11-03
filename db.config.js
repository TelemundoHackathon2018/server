const mongoose = require('mongoose');

mongoose.connect('mongodb://nbsee-admin:fiunbcu2018@nb-see-shard-00-00-1gn1a.gcp.mongodb.net:27017,nb-see-shard-00-01-1gn1a.gcp.mongodb.net:27017,nb-see-shard-00-02-1gn1a.gcp.mongodb.net:27017/test?ssl=true&replicaSet=NB-SEE-shard-0&authSource=admin&retryWrites=true', { userNewUrlParser: true })
.then (()=> console.log("Start"))
.catch(err => {
        console.error("Starting Error: ", err.stack);
        process.exit(1);
    });