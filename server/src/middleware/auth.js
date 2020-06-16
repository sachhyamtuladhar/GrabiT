const jwt = require('jsonwebtoken')

const User = require('../models/user')

const auth = async (req, res, next)=>{
    try{
        console.log('[Auth:]', req.header('Authorization'))
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token, 'bajagainFriend')
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})

        if(!user){
            throw new Error('user not found')
        }

        req.token = token
        req.user = user
        next()

    }catch(e){
        res.status(401).send({error: 'Please authenticate'})
        console.log('[Auth:]', e)
    }
}

module.exports = auth