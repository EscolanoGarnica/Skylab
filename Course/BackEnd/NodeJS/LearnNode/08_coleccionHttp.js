const http = require('http')

if(process.argv.length !==3)
	throw new Error('incorrect number of arguments')

const url = process.argv[2]

http.get(url,function(response){
	
	let stringData = ''
	response.setEncoding('utf8')
	
	response.on('data',function(data){
		stringData = stringData + data
	})

	response.on('end',function(){
		console.log(stringData.length)	
		console.log(stringData)
	})
	
})