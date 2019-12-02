const {db,User,Event} = require('./index')

const seed = () => {
    const usersToBe = [
        {
            firstName: 'First',
            lastName: 'User',
            email: 'FirstUser@gmail.com'
        },
        {
            firstName: 'Second',
            lastName: 'User',
            email: 'SecondUser@aol.com'
        },
        {
            firstName: 'Third',
            lastName: 'User',
            email: 'ThirdUser@aol.com'
        }
    ]
    const eventsToBe = [
        {
            Name: 'Halloween',
            Year: '2019',
            Month: '10',
            Day: '31',
            Description: 'for ghosts and goblins',
            Completion: false
        },
        {
            Name: 'Thanksgiving',
            Year: '2019',
            Month: '11',
            Day: '28',
            Description: 'for fat Prilgrims and turkey',
            Completion: false
        }
        ,
        {
            Name: 'Christmas',
            Year: '2019',
            Month: '12',
            Day: '25',
            Description: 'for ginger bread men and raindear',
            Completion: false
        }
    ]
    
    db.sync({ force: true })
    .then(async()=>{
        const [thompson,ruthie,grier] = await Promise.all(usersToBe.map(obj=>User.create(obj)))
        const [Halloween,Thanksgiving,Christmas] = await Promise.all(eventsToBe.map(obj=>Event.create(obj)))
    })
    
}

//seed()

module.exports=seed