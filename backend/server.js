require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const courseRoutes = require('./routes/courses')


const app = express()
// middelware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()

})

app.use('/api/courses',courseRoutes)
// connect to db 
mongoose.connect(process.env.MONGODB).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('connected to db & listening on port ',process.env.PORT)
    })
    
}).catch((err)=>{
    console.log(err)
})

