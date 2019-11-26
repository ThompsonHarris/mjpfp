const express = require('express')
const path = require('path')
const {User} = require('./db/index')

const app = express()
app.use(express.json());

app.use(express.static(path.join(__dirname, '../static')));

app.get('/',(req,res,next)=>{
    res.send('hey')
})

app.get('/users',(req,res,next)=>{
    User.findAll()
    .then(data=>{
        res.send(data)
    })
})

module.exports = app