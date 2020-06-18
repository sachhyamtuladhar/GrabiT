const mongoose = require('mongoose')

mongoose.connect('mongodb://mongodb:27017/GrabIt',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(e=>console.log(e))




