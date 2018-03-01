/**
 * Task API
 * @version 1.0.0
 */

require('dotenv').config()

const express = require('express')

// const taskRouter = require('')

const app = express()

const port = process.env.PORT

app.listen(port, () => console.log(`Task API running on port ${port}`))