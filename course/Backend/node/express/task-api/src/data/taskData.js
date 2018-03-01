const tasks = []

const taskData = {

    list() { return tasks },

    create(task,username) {
        const idTk  = Date.now()

        tasks.push({ "idTask": idTk, task, username })
    }
}

module.exports = taskData