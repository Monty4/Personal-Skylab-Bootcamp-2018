require('dotenv').config()
const express = require('express')
const { MongoClient} = require('mongodb')

const app = express()

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) throw err

    const db = database.db('bootcamp')

    app.get('/', (req,res) => {
        const query = req.query.q || req.query.query || ''

        const regex = new RegExp(query, 'i')

        db.collection('staff').find({ name: regex, email: regex}).toArray((err,data) => {
            if (err) throw err
            // console.log(res)
            res.json(data)
    
            // database.close()
        })
    })

    // CREATE USER

    router.post('/tasks', jsonBodyParser, (req, res) => {
        const { text } = req.body;
        // const { body: { text } } = req
    
        // console.log(text) // text
        // console.log({text}) // { text: 'text' }
        // console.log({body: {text}}) // { text: 'text' }
    
        try{
            taskLogic.create(text);
    
            res.json( success('New Task created') );
        }catch (err) {
            res.json( fail('Error creating new task', err.message) );
        }
    })
    
    const port = process.env.PORT

    app.listen(port, () => console.log(`server running on port ${port}`))

    process.on('SIGINT', () => {
        console.log('stopping server')

        conn.close()

        process.exit()
    })
})