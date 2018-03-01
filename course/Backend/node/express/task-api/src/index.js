/**
 * Task API
 * 
 * @version 1.0.0
 */

require('dotenv').config()

const express = require('express')

const taskRouter = require('./api/taskRouter')

const app = express()

//app.use('/api', taskRouter) localhost:5000/api/tasks
app.use(taskRouter) // localhost:5000/tasks

const port = process.env.PORT

app.listen(port, () => console.log(`Tasks API running on port ${port}`))