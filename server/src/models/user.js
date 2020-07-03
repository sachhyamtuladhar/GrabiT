const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const uniqueValidator = require('mongoose-unique-validator')



const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    }, 
    email:{
        type: String,
        required: true,
        trim: true,
        email:true,
        lowercase: true,
        validate(val){
            if (!validator.isEmail(val))
                throw new Error('Email is invalid')
        },
        unique: true
    },
    password:{
        type: String,
        require: true,
        trim: true,
        minlength: 6,
        validate(value){
            if(value.toLowerCase().includes('password'))
                throw new Error("Invalid password.")
        }  
    },
    age:{
        type: Number,
        require: true,
        default: 0,
        validate(value){
            if((value < 0))
                throw new Error("Age can't be negative")
        }  
    },
    tokens: [{
        token:{
            type: String,
            required: true
        }
    }],
    avatar:{
        type: Buffer
    }
},{
    timestamps: true
})

// userSchema.virtual('tasks', {
//     ref: 'Task',
//     localField: '_id',
//     foreignField: 'owner'
// })

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject();
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar
    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user.id.toString()}, 'bajagainFriend', {expiresIn: '2 days'})
    user.tokens = user.tokens.concat({token})
    await user.save();
    return token
}


// find user by unsame and password
userSchema.statics.findByCredentials = async (email, password)=>{
    const user = await User.findOne({email: email})
    if (!user){
        throw new Error('Invalid credentials')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    
    if(!isMatch){
        throw new Error('Invalid credentials')
    } 
    return user
} 


// hash the plaintext password
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    
        next()
    }
})

// delete tasks wh user delete
// userSchema.pre('delete', async function(next){
//     const user = this
//     Task.deleteMany({owner: user._id})
//     next()
// })

userSchema.plugin(uniqueValidator)

const User = mongoose.model('User', userSchema);

module.exports = User