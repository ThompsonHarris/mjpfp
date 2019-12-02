const app = require('./app')
const {db} = require('./db/index')
const PORT  = process.env.PORT || 3000

db.sync()
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log("I'm running", PORT)
        })
    })
    .catch(e => {
        console.log('connection error', e);
    });