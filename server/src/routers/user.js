const express = require('express')
const router = new express.Router()

// const multer = require('multer')
// const sharp = require('sharp')

// const upload = multer({
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(jpg|jpeg|png)$/))
//             cb(new Error('Please upload png or jpg file'))

//         cb(undefined, true)
//     }
// })

const User = require('../models/user')
const auth = require('../middleware/auth')

router.get('/users/me',auth ,async (req, res)=>{
    res.send(req.user)
})

// router.get('/users/:id', async (req, res)=>{
//     const _id = req.params.id
//     try{
//         const user = await User.findById(_id)
//         if(!user)
//            return res.status(404).send()
//         res.send(user)
//     }catch(e){
//         res.status(500).send()
//     }
// })


// Signup Route
router.post('/users', async (req,res)=>{
    const user = new User(req.body)
    try{
        await user.save()

        const token = await user.generateAuthToken()

        res.status(201).send({user,token})
    }catch(e){
        res.status(400).send(e)
        console.log(e)
    }
})

// Signin Route
router.post('/users/login', async (req, res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken()
        res.send({user, token});
    }catch(e){
        res.status(400).send({message: e.message})
    }
})

router.post('/users/logout', auth, async (req, res)=>{
    try{
        req.user.tokens = req.user.tokens.filter(token=>token.token !== req.token)
        await req.user.save()
        res.send(req.user)
    }catch(e){
        res.status(500).send(e)
    }
})

router.post('/users/logout_all', auth, async (req, res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.send(req.user)
    }catch(e){
        res.status(500).send(e)
    }
})

router.patch('/users/me', auth, async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['email', 'name', 'password', 'age']
    updatesValid = updates.every(update=>allowedUpdates.includes(update))

    if(!updatesValid)
        res.status(400).send('Error: Invalid Updates!')

    try{
        updates.forEach(update=>req.user[update]= req.body[update])
        await req.user.save();        
        res.send(req.user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req,res)=>{
    try{
        req.user.remove()
        res.send(req.user)
    }catch(e){
        res.status(500).send(e)
    }
})

// router.post('/users/me/avatar', auth, upload.single('avatar') , async (req, res)=>{
//     req.user.avatar = await sharp(req.file.buffer).resize({width: 250, height: 250}).png().toBuffer()
//     await req.user.save()
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send(error.message)
// })

// router.delete('/users/me/avatar', auth, async (req, res)=>{
//     req.user.avatar = undefined
//     await req.user.save()
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send(error.message)
// })

// router.get('/users/:id/avatar', async (req, res)=>{
//     try{
//         const user = await User.findById(req.params.id)
//         if(!user || !user.picture){
//             throw new Error('No image found')
//         }
//         res.set('Content-Type', 'image/png')
//         res.send(user.avatar)
//     }catch(e){
//         res.status(404).send(e)
//     }
// })

module.exports = router
