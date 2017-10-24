const fs = require('fs')
//const path = process.argv[2] //se coge el 2º elemento, porque sabemos que será el tercer argumento,

const path = process.argv[process.argv.length-1] // esto cogeria siempre el último argumento

fs.readFile(path,function(err,data){
	if (err) throw err

	const arrayData = data.toString().split('\n')
	console.log(arrayData.length-1)
})
