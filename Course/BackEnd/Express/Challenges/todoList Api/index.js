const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json())

const todoService = new (require('./services/TodoService'))

app.get('/tasksapi',(req,res)=>{

	const tasks = todoService.listTasks().map(task=>({id:task.id, name:task.name, done:task.done}))
	res.json({
		status: 'OK',
		message: 'Tasks list succesfully',
		data: tasks
	})
})

app.put('/tasksapi/:id',(req,res)=>{

	const idTask = req.params.id
	try{
		const tasks = todoService.doneTask(idTask).map(task=>({id:task.id, name:task.name, done:task.done}))
		res.json({
			status: 'OK',
			message: 'Task doned succesfully',
			data: tasks
		})
	}catch(err){
		console.error(err.message)
		res.json({
			status: 'KO',
			message: err.message
		})
	}	
})

app.delete('/tasksapi/:id',(req,res)=>{

	const idTask = req.params.id
	try{
		const tasks = todoService.deleteTask(idTask).map(task=>({id:task.id, name:task.name, done:task.done}))
		res.json({
			status: 'OK',
			message: 'Tasks deleted succesfully',
			data: tasks
		})
	}catch(err){
		console.error(err.message)
		res.json({
			status: 'KO',
			message: err.message
		})
	}		
})

app.post('/tasksapi',(req,res)=>{
	const taskName = req.body.taskName	
	try{
		const task = todoService.createTask(taskName)
		
		res.json({
			status: 'OK',
			message: 'Task created succesfully',
			data: {
				id: task.id,
				name: task.name
			}
		})
	}catch(err){
		console.error(err.message)
		res.json({
			status: 'KO',
			message: err.message
		})
	}
})



app.listen(8080, ()=>{console.log("Server up in port 8080")})