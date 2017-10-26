const fs = require('fs')

if(process.argv.length !==3)
	throw new Error('incorrect number of arguments')

const file = process.argv[2]

fs.createReadStream(file).pipe(process.stdout)

