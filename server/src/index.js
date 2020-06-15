const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')


const app = express()
const port = process.env.port || 5000

app.use(express.json())

app.use(userRouter)



app.get('/login', (req,res)=>{
    res.json({title: "Logged in"})
})

app.get('', (req,res)=>{
    res.send({potato: "timatp"})
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})