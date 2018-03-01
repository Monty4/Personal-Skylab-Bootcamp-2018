const taskData = require('../data/taskData')

function validate(task, username){
    if(!task || !username) throw Error('Invalid Task text and/or username')
}

const taskLogic = {

    list(){
        // return taskData.list().map(({text}) => ({text}))
        return taskData.list()
    },
    register(task, username){
        validate(task, username)

        return taskData.create(task, username)
    }
}

module.exports = taskLogic