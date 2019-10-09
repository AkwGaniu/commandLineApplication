// Problem: We need a simple way to look at a user badge count and javascript point
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

const https = require(`https`)

const printMessage = (username, badges, points) => {
    const message = `${username} has ${badges} number of badge(s) and the total of ${points} point(s) in Javascript`
    console.log(message)
}

const userProfile = (username) => {
    try{
        // Connect to the API url (https://teamtreehouse.com/username.json)
        let body = ""
        const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
            if (response.statusCode === 200) {
                response.on("data", (d) => {
                    // Read the data
                    body += d.toString()
                })

                response.on("end", () => {
                    // Parse the data
                    let profile = JSON.parse(body)

                    // Print the data 
                    printMessage(username, profile.badges.length, profile.points.JavaScript)
                })
            } else {
                let statusError = `No record for profile name ${username} ${response.statusCode}`
                const newError = new error(statusError) 
            }
        })

        request.on("error", error => {
            console.error(`Something went wrong: ${error.message}`)
        })

    } catch (error) {
        console.log(error.message)
    }
}



//userProfile("alenaholligan")
let users = ["davemcfarland", "alenaholligan", "chalkers"]
let users1 = process.argv.slice(2)

//users.forEach( userProfile)
users1.forEach( user => {
    userProfile(user)
})

// Copy this to terminal without parenthesis (node app davemcfarland alenaholligan chalkers) 
// and hit enter to see the magic