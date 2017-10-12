class App extends React.Component {
    constructor(props) {    
        super(props)    //llamamos al constructor de React.Component con super()

        this.state = {  //creamos un stado que contendrá los items
            items: []
        }

    }

    handleKeyPress = (event) => {   //función para agreagar tareas a la To Do list
        if (event.charCode == 13) { /// es lo mismo: event.key == 'Enter'
            if(!event.target.value)
                return

            const item = {  //creamos un item con un id, el texto de la tarea y un bool
                id: Date.now(),
                text: event.target.value,
                done: false
            }

            this.setState(function (prevState) { //el setState renderiza de nuevo
                return {
                    items: prevState.items.concat(item)
                }
            })
            event.target.value = ''

        }


    }

    handleCheckAll =(event)=>{
        let  e = event.target.value 
        this.state.items.map((obj)=>{
            this.setState((prevState)=> {
              return obj.done = true
            })
        })
    }

    handleCheckedChanged =(event)=>{
        let  e = event.target.value 
        setTimeout(()=>{    //el setTimeout es para que se vea el "check"
            this.state.items.map((obj)=>{
                if(obj.id == e){
                    this.setState((prevState)=> {
                        return obj.done = true
                    })
                }
           })
        },100)
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <TodoList 
                    handleKeyPress={this.handleKeyPress}
                    handleCheckedChanged={this.handleCheckedChanged}
                    handleCheckAll ={this.handleCheckAll}
                    items={this.state.items}
                    />
                </div>
                <div className="col-md-6">
                    <DoneList 
                    items={this.state.items}
                    />
                </div>
            </div>
        </div>
    }
}


class TodoList extends React.Component {
    render() {
        return <div className="todolist not-done">
            <h1>To Dos</h1>

            <input onKeyPress={this.props.handleKeyPress} type="text" className="form-control add-todo" placeholder="Add todo" />
            <button onClick={this.props.handleCheckAll} id="checkAll" className="btn btn-success">Mark all as done</button>
            <hr />
            <ul onClick={this.props.handleCheckedChanged} id="sortable" className="list-unstyled">
                {this.props.items.map( (item,i)=> {
                    if (item.done == false){

                        return <li key={i} className="ui-state-default"  >
                        <div className="checkbox">
                            <label>
                                <input  value={item.id} type="checkbox" />{item.text}</label>
                        </div>
                    </li>

                    }
                    
                })}
            </ul>
            <div className="todo-footer">
                <strong><span className="count-todos" /></strong>{this.props.items.reduce(function(accum,item){
                    return !item.done? ++accum: accum
                },0)} Items Left
              </div>
        </div>
    }
}

class DoneList extends React.Component {

    render() {
        return <div className="todolist">
            <h1>Already Done</h1>
            <ul id="done-items" className="list-unstyled">
             {this.props.items.map( (item,i)=> {
                    if (item.done == true){
                       return <li key={i}>{item.text}
                            <button className="remove-item btn btn-default btn-xs pull-right">
                                <span className="glyphicon glyphicon-remove" />
                            </button>
                        </li>
                    }   
                })}
            </ul>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))













