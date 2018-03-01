const express = require('express')

const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()

let users = []

app.get('/api/users', (req,res) => {
    
})



class User {
    constructor(username,password){
        this.user = username
        this.pass = password
    }
}

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/api/users', urlencodedParser, (req, res) => {
    res.send(`${req.body.username}:${req.body.password}`)

    let username = req.body.username
    let password = req.body.password

    let user = new User(username,password)

    usersArray.push(user)

    
})

// MODIFY USER
app.put(

)

// DELETE USER
app.delete(

)


const port = process.env.PORT

app.listen(port, () => console.log(`API running on port ${port}`))