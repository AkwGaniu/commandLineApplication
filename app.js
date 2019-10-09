// Copy this to terminal without parenthesis (node app davemcfarland alenaholligan chalkers) 
// and hit enter to get the badges and the points of each user in javascript from treehouse

profile = require(`./profile`)



//userProfile("alenaholligan")
let users = ["davemcfarland", "alenaholligan", "chalkers"]
let users1 = process.argv.slice(2)

//users.forEach( userProfile)
users1.forEach( user => {
    profile.userProfile(user)
})

