//Write a node program that read a file (passed as parameter) in local machine and shows in the console the content of it.


const fs = require('fs')

const file = process.argv[2]

fs.readFile(file, 'utf-8', (err, text) => {
	if (err) throw err

	console.log(text)
})