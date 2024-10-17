const express=require('express')
require('dotenv').config()
const app=express()
// const port=3000

app.get('/', (req, res)=>{
    res.send('hello world....')
})

app.get('/login', (req, res)=>{
    res.send('<h1> ohh yes </h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})