const { Transform } = require('stream') // Transform es una propiedad, entre otras, de stream

const toUpperCase = new Transform({
   transform(chunk, encoding, next) {
       this.push(chunk.toString().toUpperCase())

       next()
   }
})

process.stdin.pipe(toUpperCase).pipe(process.stdout) // stdin(standard in) es la consola de entrada, stdout(standard out) es la salida
