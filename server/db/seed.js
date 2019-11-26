const {db,User} = require('./index')

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
    db.sync({ force: true })
    .then(async()=>{
        const [thompson,ruthie,grier] = await Promise.all(usersToBe.map(obj=>User.create(obj)))
    })
    
}

seed()