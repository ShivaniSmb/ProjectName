const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')

const app = express()
const PORT = 8000

mongoose.connect('mongodb://127.0.0.1:27017/test_db')
.then(() =>{
    console.log('Connection established')
})
.catch((err)=>{
    console.log('error connecting to mongoDB:',err.message)
})

app.use(express.json())
app.use(userRouter)


app.listen(PORT,()=>{
    console.log("app is serving")
})
