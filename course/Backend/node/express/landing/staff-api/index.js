require('dotenv').config()

// const fs = require('fs')
// const staff = fs.readFileSync(dataPath, 'utf-8')

const staff = require('./data/staff.json')

const express = require('express')

const app = express()

app.get('/api/staff', (req,res) => {
    const query = req.query.q || req.query.query

    if (query) {
        return person => person.name.includes(query) || person.surname.includes(query) || person.email.includes(query) || person['github-username'].includes(query)

        res.json(results)
    }else {
        res.json(staff)
    }

    res.send('ok')
})

app.get('/api/staff/shuffle', (req,res) => {
    
})

const port = process.env.PORT

app.listen(port, () => console.log(`api running on port ${port}`))

