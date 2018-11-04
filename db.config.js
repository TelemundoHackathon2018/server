const mongoose = require('mongoose');
const uri = "mongodb+srv://nbsee-admin:fiunbcu2018@nb-see-1gn1a.gcp.mongodb.net/test?retryWrites=true"
mongoose.connect(uri, { useNewUrlParser: true })
.then (()=> console.log("Start"))
.catch(err => {
        console.error("Starting Error: ", err.stack);
        process.exit(1);
    });