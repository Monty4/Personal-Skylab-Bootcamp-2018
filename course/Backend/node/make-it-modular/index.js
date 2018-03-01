const filteredLs = require('./filtered-ls')
//import filteredLs from './filtered-ls'

const path = proccess.argv[2]
const ext = proccess.argv[3]

filteredLs('..', 'js', files => files.forEach(file => console.log(file)))