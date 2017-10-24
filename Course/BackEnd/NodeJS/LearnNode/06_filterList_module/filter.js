const fs = require('fs')

function filter(path,extension,callback){
	fs.readdir(path,'utf8',function(err, data){
		if (err) return callback(err)

		let arrayFiles = data.filter(function(elem){	
			return elem.includes('.' + extension)
		})


			return callback(null,arrayFiles)	//EL RETURN NO ES NECESARIO
	})
}

module.exports = filter