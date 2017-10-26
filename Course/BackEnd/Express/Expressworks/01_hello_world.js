const express = require('express')

const app = express()

if(process.argv.length !==3)
	throw new Error('Incorrect number of arguments')

const PORT = process.argv[2]

app.get('/home', (req,res)=>{
	res.end('Hello World!')
})

app.listen(PORT)