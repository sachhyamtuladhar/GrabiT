const mongoose = require('mongoose')

mongoose.connect('mongodb://mongodb:27017/grabIt',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})




