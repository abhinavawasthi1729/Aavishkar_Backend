// const express=require('express')
import express from 'express';
// require('dotenv').config()
const app=express()
// const port=3000

app.get('/', (req, res)=>{
    res.send('hello world....')
})

app.get('/api/jokes', (req, res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content: 'This is a joke'
        }, 
        {
            id:2, 
            title: 'Another joke', 
            content: 'This is a joke'
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})