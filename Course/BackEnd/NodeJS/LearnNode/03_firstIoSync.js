
const fs = require('fs')
const path = process.argv.slice(2).toString()
const buffer= fs.readFileSync(path).toString()
const arrayBuffer = buffer.split('\n')

console.log(arrayBuffer.length-1)
