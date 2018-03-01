const fs = require('fs')
const { Transform } = require('stream') // Transform es una propiedad, entre otras, de stream
const byline = require('byline') // Pone los elementos línea a línea

const waterIn = fs.createReadStream('water.txt')
const waterOut = fs.createWriteStream('clean-water.txt')
const waterInElements = byline.createStream(waterIn)

const waterCleaner = new Transform({
   transform(chunk, encoding, next) {
       const element = chunk.toString()
       
       if (element === 'H2O')
       this.push(`${element}`)

       next()
   }
})

waterInElements.pipe(waterCleaner).pipe(waterOut)
