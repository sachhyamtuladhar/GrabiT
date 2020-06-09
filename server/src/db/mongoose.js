const mongoose = require('mongoose')

mongoose.connect('mongodb://mongodb:27017/hamrobazaar',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})




