const http = require('http')
const url = require('url')


const server = http.createServer((req, res) => {
    const _url = url.parse(req.url, true) // true parsea a url a modo objeto para poder acceder a sus propieddades

    switch (_url.pathname) {
        case '/api/parsetime':
            { // Creamos un miniscope para que no de problemas const data
            const date = new Date(_url.query.iso)

            const data = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }

            res.writeHead(200, { 'Content-Type': 'application/json' })

            res.end(JSON.stringify(data))
            }

            break

        case '/api/unixtime':
            {
            const date = new Date(_url.query.iso)

            const data = {
                unixtime: date.getTime()
            }

            res.writeHead(200, { 'Content-Type': 'application/json' })

            res.end(JSON.stringify(data)) // Pasamos el objeto a string y lo convertimos en JSON
            }

            break

        default:
            res.writeHead(405)
            
            res.end('hello! i cannot process that request ... sorry :(')
            

    }

    // if (_url.pathname === '/api/parssetime') {
    //     const date = new Date(_url.query.iso)

    //     const data = {
    //         hour: date.getHours(),
    //         minute: date.getMinutes(),
    //         second: date.getSeconds()
    //     }

    //     res.writeHead(200, { 'Content-Type': 'application/json' })

    //     res.end(JSON.stringify(data))
    // }else{

    //     res.writeHead(405)

    //     res.end('hello! i cannot process that request ... sorry :(')
    // }

    

    // res.write('hello world!!')
    // res.end()

    // res.end('ok!!!')
})

const port = process.argv[2]

server.listen(port, () => console.log(`http JSON api server running on port ${port}`))