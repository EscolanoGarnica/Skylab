import axios from 'axios'


const todoAPI ={
	baseURL:'http://localhost:8080/tasksapi',
	

	createNewTask: function(name){
		return axios.post(this.baseURL, {taskName:name})
		.then(res=>res)
	},
	
	listTasks: function(){
		return axios.get(this.baseURL)
		.then(res=>res.data.data)
		//.catch(e => throw new Error(e)
	},

	deleteTask: function(id){
		return axios.delete(this.baseURL + '/' + id)
		.then(res=>res.data.data)
	},
	doneTask: function(id){
		console.log(id)
		return axios.put(this.baseURL + '/'+ id)
		.then(res=>res.data.data)
	},
}


export default todoAPI

