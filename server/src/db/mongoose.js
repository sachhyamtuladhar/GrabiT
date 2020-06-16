const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/GrabIt',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(e=>console.log(e))




