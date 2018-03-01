

const bodyParser = require('body-parser')

const taskData = require('../data/taskData')

const taskLogic = require('../logic/taskLogic')

const { Router } = require('express')

const { success, fail } = require('./api-utils')

const router = Router()

router.get('/tasks', (req, res) => res.json(success('Tasks listing succeded.',taskData.list.map(({idTask,task,username}) => ({idTask,task,username})))))

const jsonBodyParser = bodyParser.json()

router.post('/tasks', jsonBodyParser, (req,res) =>{
    const {task, username} = req.body

    try{
        taskLogic.register(task, username)
    }catch(err){
        res.json(fail('User registration failed.', err.message))
    }

    // res.json(success(text))
    

    res.json(success('User registration succeded.'))

})

module.exports = router