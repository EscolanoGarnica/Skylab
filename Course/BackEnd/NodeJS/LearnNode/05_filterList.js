const fs = require('fs')
const path = process.argv[2]
const extension = process.argv[3]


fs.readdir(path,'utf8',function(err,data){			//obtengo todos los archivos de la ruta
	let arrayFiles = data.filter(function(elem){	//filtro el array data
		if(elem.indexOf('.' + extension)!==-1)		//si el elemento contiene la extensión lo añado a la array
		//if(elem.includes('.' + extensión))		// es otra forma de hacerlo
			return elem
	})
	arrayFiles = arrayFiles.join('\n')		//paso el array a string, separando cada elemento por un salto de linea
	console.log(arrayFiles)
})
