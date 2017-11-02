const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine','pug')

const todoService = new (require('./services/TodoService'))

app.get('/',(req,res)=>{

	const tasks = todoService.listTasks()

	res.render('index',{tasks})
})

app.get('/done',(req,res)=>{

	const idTask = req.query.id
	try{
		todoService.doneTask(idTask)
	}catch(err){
		console.error(err.message)
	}	
	res.redirect('/')
})

app.get('/delete',(req,res)=>{

	const idTask = req.query.id
	try{
		todoService.deleteTask(idTask)
	}catch(err){
		console.error(err.message)
	}
	res.redirect('/')
})

app.post('/',(req,res)=>{
	const taskName = req.body.taskName
	try{
		todoService.createTask(taskName)
	}catch(err){
		console.error(err.message)
	}
	res.redirect('/')
})



app.listen(3000, ()=>{console.log("Server up in port 3000")})