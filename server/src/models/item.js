const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100

    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Enter Positive value'],
        max: 100000
    },
    sold:{
        type: Boolean,
        default:false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    picture:{
        type: Buffer
    }
}, {
    timestamps: true
})

const Item = mongoose.model('Item', itemSchema )

module.exports = Item
