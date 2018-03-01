/**
 * Task API
 * 
 * @version 1.0.0
*/

require ('dotenv').config() // Importamos el archivo de configuración con el PORT

const express = require('express') // http://expressjs.com/es/starter/installing.html

const bodyParser = require('body-parser') // Es un MIDDLEWARE // https://www.npmjs.com/package/body-parser#bodyparserjsonoptions

const app = express()

const tasks = []

app.get('/tasks', (req, res) => res.json(ok('Tasks listing succeded.',tasks.map(({idTask,text}) => ({idTask,text})))))

app.get('/tasks/:task', (req,res) => {
    const { params: { idTask } } = req
    let task 

    for ( i = 0; i < tasks.length; i++) {
        const _task = tasks[i]

        if (_task.idTask === idTask) {
            res.json(ok('Tasks info succeded.',tasks.map(({idTask,text}) => ({idTask,text}))))
        }
    }
    
})

const jsonBodyParser = bodyParser.json()

app.post('/tasks', jsonBodyParser, (req,res) => {
    const {idTask, text} = req.body

    if (!text) return res.json(ko('User registration failed', 'Invalid text'))
    const idTk  = Date.now()
    
    tasks.push({ "idTask": idTk, text })

    res.json(ok('User registration succeded.'))
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

app.listen(port, () => console.log(`Task Api running on port ${port}`))