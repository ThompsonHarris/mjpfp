const {db,User,Event} = require('./index')

const seed = () => {
    const usersToBe = [
        {
            firstName: 'Thompson',
            lastName: 'Harris',
            email: 'Tharris@gmail.com'
        },
        {
            firstName: 'Ruthie',
            lastName: 'Harris',
            email: 'RHarris@aol.com'
        },
        {
            firstName: 'Grier',
            lastName: 'Harris',
            email: 'GHarris@aol.com'
        }
    ]
    const eventsToBe = [
        {
            Name: 'Halloween',
            Year: '2019',
            Month: '10',
            Day: '23',
            Description: 'for ghosts and goblins'
        },
        {
            Name: 'Chistmas',
            Year: '2029',
            Month: '12',
            Day: '25',
            Description: 'for ginger bread men and raindear'
        }
    ]
    db.sync({ force: true })
    .then(async()=>{
        const [thompson,ruthie,grier] = await Promise.all(usersToBe.map(obj=>User.create(obj)))
        const [Halloween,Christmas] = await Promise.all(eventsToBe.map(obj=>Event.create(obj)))
    })
    
}

//seed()

module.exports=seed