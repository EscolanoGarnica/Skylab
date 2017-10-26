const express = require('express')

const app = express()

if(process.argv.length !==4)
	throw new Error('Incorrect number of arguments')

const PORT = process.argv[2]
const route = process.argv[3]

app.use(express.static(route))

//	const path = require('path')
// app.use(express.static(process.argv[3] || path.join(__dirnamme, 'public'))) //__dirnamme es la ruta de este script

app.listen(PORT)

