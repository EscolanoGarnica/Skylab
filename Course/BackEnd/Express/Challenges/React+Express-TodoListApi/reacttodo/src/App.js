import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoAPI from './services/todoAPI';



class App extends Component {
	constructor(props){
		super(props)
		this.state={
			textbox:'',
			atasks:[]
		}
	}		
		
showTasks = ()=>{
	todoAPI.listTasks()
		.then(jsonData => {
			this.setState({
				atasks: jsonData,
				textbox:' '
			})
		})
	


}
changeTextbox=(e)=>{
	this.setState({
		textbox: e.target.value,
	})
}

addTask=(e)=>{
	e.preventDefault()
	todoAPI.createNewTask(this.state.textbox)
	.then(res =>{this.showTasks()})
	
}

doneTask=(e,id)=>{
	e.preventDefault()
	todoAPI.doneTask(id)
	.then(jsonData => {
		this.setState({
		atasks: jsonData
			})
})
}

deleteTask=(e,id)=>{
	e.preventDefault()
	todoAPI.deleteTask(id)
	.then(jsonData => {
		this.setState({
		atasks: jsonData
			})
})
}
	
  render() {
    return (
      <div className="App">
      <h1>To Do List</h1>
	  <form >
       <input type="text" className="input-lg" onChange={this.changeTextbox} name="newTask" value={this.state.textbox}/> 
	   <button className='btn-success btn-lg' type="submit" onClick={this.addTask}>Add Task</button>
	   </form>
	   <div className="container">
		   <div className="row">
			   <div className="col-sm-6">
				   {this.state.atasks.some(task =>  !task.done) ? <h3>To do List</h3> : undefined}
				   <ul>
				   {this.state.atasks.length ? this.state.atasks.map(task=>{if(!task.done){return <li  onClick={event =>this.doneTask(event,task.id)}><a href="#">{task.name}</a></li>}else{return undefined}}) : undefined}
				   </ul>
			   </div>
			   <div className="col-sm-6">
			   		 {this.state.atasks.some(task =>  task.done) ? <h3>Done Items</h3> : undefined}
				     <ul>
				   {this.state.atasks.length ? this.state.atasks.map(task=>{if(task.done){return <li onClick={event =>this.deleteTask(event,task.id)}><a href="#">{task.name}</a></li>}else{return undefined}}) : undefined}
				   </ul>
			   </div>
			</div>
		</div>
      </div>
);
  }
}

export default App;
