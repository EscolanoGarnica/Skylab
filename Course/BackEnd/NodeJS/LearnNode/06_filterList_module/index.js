const fs = require('fs')
const filter = require('./filter')	//importo la función filter desde el archivo filter.js

if(process.argv.length !== 4)
	throw new Error('incorrect number of arguments')

const [path, extension] = process.argv.slice(process.argv.length-2)

function showResult(err,data){
	if(err) return err

	//console.log(data)

	data.forEach(function(elem){
		console.log(elem)
	})
}

filter(path,extension,showResult)




