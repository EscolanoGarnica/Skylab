const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'pug')

let logedIn = false

app.get('/',(req,res)=>{
	res.render('index')
})

app.post('/login',(req,res)=>{
	const username = req.body.username
	const password = req.body.password
	if(logedIn = (username === 'pepito' && password === '123'))
		return res.redirect('/private')

	res.send('Username or password incorrect')
})

app.get('/private', (req,res)=>{
	if(logedIn)
		res.send('You are at private page')
	else
		res.redirect('/')
})

app.listen(3000)