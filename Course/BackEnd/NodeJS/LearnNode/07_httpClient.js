const http = require('http')

if(process.argv.length !==3)
	throw new Error('incorrect number of arguments')

const url = process.argv[2]

http.get(url,function(response){

	response.setEncoding('utf8')
	
	response.on('data',function(body){
		console.log(body)
	})

})