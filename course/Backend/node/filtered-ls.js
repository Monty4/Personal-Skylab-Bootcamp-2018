// https://nodejs.org/api/path.html#path_path_extname_path

const fs = require('fs')
const path = require('path')

//const path = process.argv[2]

const _path = process.argv[2]
const ext = process.argv[3]

fs.readdir(_path, (err, files) => {
    // err ? reject(err) : resolve(files)
    // console.log(files)

    files.forEach(file => {
        if (path.extname(file) === `.${ext}`) console.log(file) // what happens with hid
    })
})