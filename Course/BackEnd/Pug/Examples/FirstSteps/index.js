const express = require('express')
const app = express()

app.set('view engine','pug')

app.get('/',(req,res)=>{

	const name= req.query.name || 'Michel'
	const friends = ['Juan','Marc','Alberto','Jose','Domingo']

	res.render('index',{title:'First Steps',message:`Aqui pongo lo que me da la gana ${name}.`,friends})
})

app.listen(3001)