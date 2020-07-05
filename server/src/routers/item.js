const express = require('express')
const router = new express.Router()

const auth = require('../middleware/auth')
const Item = require('../models/item')

// GET /items?sold=false
// GET /items?limit=10&skip=20
// GET /items?sortby=createdAt:desc
router.get('/items', auth, async (req, res) =>{
    const match = {}
    const sort = {}

    if (req.query.sold)
        match.sold = 'true' === req.query.sold
    if (req.query.sortby){
        const sortParts = req.query.sortby.split(':')
        sort[sortParts[0]] = sortParts[1] === 'desc' ? -1 : 1
    }
    

    try{
        // const items = await Item.find({owner: req.user._id})
        await req.user.populate({
            path:'items', 
            match,
            options:{
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        res.send(req.user.items)
    }catch(e){
        res.status(500).send(e)
    }
})


// GET /items?completed=false
// GET /items?limit=10&skip=20
// GET /items?sortby=createdAt:desc
router.get('/items/all',  async (req, res) =>{
    const sort = {}
    const match = {}

    // if (req.query.completed)
    //     match.completed = 'true' === req.query.completed
    // if (req.query.sortby){
    //     const sortParts = req.query.sortby.split(':')
    //     sort[sortParts[0]] = sortParts[1] === 'desc' ? -1 : 1
    // }
    

    try{
        // const items = await Task.find({owner: req.user._id})
        const items = await Item.find({})
        res.send(items)
    }catch(e){
        res.status(500).send(e)
    }
})


router.get('/items/:id', auth, async(req, res)=>{
    try{
        const item = await Item.findOne({_id: req.params.id, owner: req.user._id})
        if(!item)
            res.status(404).send()
        res.send(item)
    }catch(e){
        res.status(500).send(e)
    }
})


router.post('/items', auth, async(req,res)=>{
    const item = new Item({
        ...req.body,
        owner: req.user._id
    })
    try{
        await item.save()
        res.status(201).send(item)
    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/items/:id', auth, async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'sold']
    updatesValid = updates.every(update=>allowedUpdates.includes(update))

    if(!updatesValid)
        res.status(400).send('Error: Invalid Updates!')

    try{
        if(!item)
            res.status(404).send()
        const item = await Item.findOne({id: req.params.id, owner: req.user._id}) 
        updates.array.forEach(update => {
            item[update] = req.body[update]
        });
        await item.save()
        res.send(item)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('items/:id', auth, (req, res)=>{
    try{
        const item = findOneAndDelete({_id: req.params._id, owner: req.user.params})
        if (!item)
            res.status(404).send()

        res.send(item)
    }catch{
        res.status(500).send()
    }
})


module.exports = router