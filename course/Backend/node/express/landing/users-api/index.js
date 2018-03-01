

require ('dotenv').config() // Importamos el archivo de configuración con el PORT

const express = require('express') // http://expressjs.com/es/starter/installing.html

const bodyParser = require('body-parser') // Es un MIDDLEWARE // https://www.npmjs.com/package/body-parser#bodyparserjsonoptions

/**
 * Users API
 * 
 * @version 1.0.0
*/
const app = express()

const users = []

app.get('/api/users', (req, res) => res.json(ok('Users listing succeded.',users.map(({username}) => ({username})))))

app.get('api/users/:username', (req,res) => {
    // const {username} = req.params
    const { params: username } = req

    let user

    for (let i = 0; i <users.length; i++) {
        const _user = users[i]

        if (_user.username === '') {}
    }
})

const jsonBodyParser = bodyParser.json() // Por qué tiene que ir aquí

app.post('/api/users', jsonBodyParser, (req,res) => {
    const {username, password} = req.body

    if (!username || !password) return res.json(ko('User registration failed', 'Invalid username and/or password'))

    const alreadyalreadyExists = users.some(user => user.username === username)

    if (alreadyalreadyExists) return res.json(ko('User registration failed', 'Username already alreadyExists.'))

    users.push({ username, password })

    res.json(ok('User registration succeded.'))
})

app.put('/api/users', jsonBodyParser, (req,res) => {
    // const { username, password } = req.body
    const { username, password } = req.body
    
    if(!username || !password) return res.json(ko('User update failed', 'Invalid username and/or password'))

    const alreadyExists = users.some(user => user.username === username)

    if(!alreadyExists) return res.json(ko('User update failed', 'User not found'))

    const index = users.findIndex(user => user.username === username)
    users[index].password = password

    res.json(ok('User updated sucesfully'))

})

app.delete('/api/users', jsonBodyParser, (req,res) => {
    const { username, password } = req.body
    
    if(!username || !password) return res.json(ko('User Delete failed', 'Invalid username and/or password'))

    const alreadyExists = users.some(user => user.username === username)

    if(!alreadyExists) return res.json(ko('User Delete failed', 'User not found'))

    const index = users.findIndex(user => user.username === username)
    users[index].password = password
    users.splice(index, 1)

    res.json(ok('User deleted sucesfully'))

})

function ok(message,data) {
    const res = {status: 'OK', message}

    if(data) res.data = data // data es un array porque lo recibe de users.map(...) y esto es un array

    return res
}

function ko(message,error) {
    const res = {status: 'KO', message}

    if (error) res.error = error

    return res
}

const port = process.env.PORT

app.listen(port, () => console.log(`Users Api running on port ${port}`))