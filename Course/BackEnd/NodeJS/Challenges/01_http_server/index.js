

// para ejecutar este script antes hay que definir una variable de entorno, ir a la terminal y escribir:
//			$ export PORT=3000 //despues para vaciar esa variable: $ unset PORT

// o ejecutar el script pasandole una variable de entorno para ese script:
//			$ PORT=3000 node index.js

const PORT = process.env.PORT

const http = require('http')

const server = http.createServer()

server.on('request', function(req,res){
	res.end('Success, i\'m listening from port: '+ PORT)
})

server.listen(PORT)




/* OTRA FORMA DE HACERLO, sin usar process.env:

const http = require('http')

const server = http.createServer()

const port = process.argv[2] // utilizo argv en lugar de process.env, pero el challenge pedia usar process.env

server.on('request', function(req,res){
	res.end('Success, i\'m listening from port: '+ port)
})

server.listen(port)
*/