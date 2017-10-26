const http = require('http')

if(process.argv.length !==3)
	throw new Error('incorrect number of arguments')

const url = process.argv[2]

http.get(url,function(response){
	
	let stringData = ''
	response.setEncoding('utf8')
	
	response.on('data',function(data){
		stringData += data
	})

	response.on('end',function(){
		console.log(stringData.length)	
		console.log(stringData)
	})
	
})

/* OTRA FORMA DE HACERLO, usando pipe(HAY QUE INSTALAR EL PAQUETE "BL"(npm install -g bl))

const http = require('http')
const bl = require('bl');	//bl es un objeto que almacena buffers de node

http.get(process.argv[2], function (response) {
 response.pipe(bl(function (err, data){
    if(err) {
        return console.error(err)
    }

    data = data.toString()
   	console.log(data.length)
   	console.log(data)
 }))
})