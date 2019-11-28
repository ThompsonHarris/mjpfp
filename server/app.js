const express = require('express')
const path = require('path')
const {User,Event} = require('./db/index')

const app = express()
app.use(express.json());

app.use(express.static(path.join(__dirname, '../static')));

app.get('/users',(req,res,next)=>{
    User.findAll()
    .then(data=>{
        res.send(data)
    })
})

app.delete('/api/events/:id',(req,res,next)=>{
    const id = req.params.id
    Event.destroy({
        where: { id: id }
    })
    .then(data=>{
        res.status(200).send('Deleted!')
    })
    .catch(err=>{
        res.status(400).send(err.message)
    })
})

app.put('/api/events/:id',(req,res,next)=>{
    const id = req.params.id
    Event.update(
        req.body,
        {where: {id: id}}
    )
    .then(()=>{
        res.status(200).send('Updated!')
    })
    .catch(err=>{
        res.status(400).send(err.message)
    })
})

app.get('/api/events',(req,res,next)=>{
    Event.findAll()
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(400).send(err.message)
    })
})

app.post('/api/events',(req,res,next)=>{
    const obj = req.body
    Event.create(obj)
    .then(data=>{
        res.status(200).send('success')
    })
    .catch(err=>{
        res.status(400).send(err.message)
    })
})




module.exports = app