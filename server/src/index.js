const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const itemRouter = require('./routers/item')


const app = express()
const port = process.env.port || 5000

app.use(express.json())

app.use(userRouter)
app.use(itemRouter)


app.get('', (req,res)=>{
    res.send({potato: "timatp"})
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})