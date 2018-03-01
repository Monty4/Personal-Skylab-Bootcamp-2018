const http = require('http')
// const fs = require('fs')

const map = require('through2-map')

const server = http.createServer((req,res) => {
    if (req.method === 'POST') 

    req.pipe(map(chunk => chunck.toString().toUpperCase())).pipe(res)


})

const port = process.argv[2]
server.listen(port, () => console.log(`http uppercaserer runing on port ${port}`))

// $ curl -X-POST --upload-file <file-path> http://localhost:8000

