//Write a node.JS program that list the content of the current directory indicating if is a directory or a file


const fs = require('fs')

const files = fs.readdirSync('.')//obtiene en un array los ficheros de un directorio

files.forEach(function(file){	//recorremos el array
	const stat = fs.lstatSync(file)	//obtiene el estado de uno de los elementos del array (recordatorio: cada elemento es un fichero)

	console.log(`${stat.isFile()? 'FILE' : 'DIR'}: ${file}`)	//evalua si stat es un fichero y muestra FILE o DIR dependiendo si lo es o no, luego pone el nombre del fichero o directorio
})

