class TodoService{

	constructor(){
		this.tasks = []
	}

	createTask(taskName){
		if(!taskName)
			throw new Error('no task provided')

		const task={
			id: new Date().getTime(),
			name: taskName,
			done: false
		}

		this.tasks.push(task)

		return this.tasks
	}

	listTasks(){
		if(this.tasks.length<1)
			return undefined

		return this.tasks;
	}

	doneTask(id){
		if(!id)
			throw new Error('no id found')

		this.tasks.map(task=>{
			if(task.id == id)
				task.done=true
		})
	}

	deleteTask(id){
		if(!id)
			throw new Error('no id found')

		for(let i=0; i<this.tasks.length; i++){
			if(this.tasks[i].id==id)
				this.tasks.splice(i,1)
		}
	}
}
module.exports = TodoService