//Write a node.JS program that creates a txt file with the text passed as a parameter

const fs = require('fs')

const text = process.argv[process.argv.length-1]	//coge el texto para escribirlo en el fichero
	
fs.writeFile('myText.txt', text, function(err){ //si el fichero no existe, lo crea y le mete el texto
	if (err) throw err

	console.log('file saved')
})