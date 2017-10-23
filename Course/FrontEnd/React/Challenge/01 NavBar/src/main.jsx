class App extends React.Component{
	render(){
		return <div>
			<NavBar/>
			<Jumbotron/>
			<Homepage/>
			</div>
	}
}

class NavBar extends React.Component{
	render(){
		return <nav className="navbar navbar-default navbar-fixed-top">
	      <div className="container-fluid">
	        <div className="row">
	          <div className="col-md-11 col-md-offset-1"> 
	           <div className="navbar-header">
	             <a className="navbar-brand" href="#">React Strap</a>
	           </div>
	            <ul className="nav navbar-nav">
	              <li className="active"><a href="#">Home</a></li>
	              <li><a href="#">About</a></li>
	              <li><a href="#">Contact</a></li>
	            </ul>    
	          </div>
	        </div>
	      </div> 
	    </nav>
	}
}

class Jumbotron extends React.Component{
	render(){
		return <div className="jumbotron">
	      <div className="container-fluid">
	        <div className="row">
	          <div className="col-md-11 col-md-offset-1"> 
	            <h1>Hello, world!</h1>
	            <p>This is a Bootsrap theme that uses React.js components</p>
	            <button className="btn btn-primary">Learn more</button>
	          </div>
	        </div>
	      </div>
	    </div>
	}
}

class Homepage extends React.Component{
	render(){
	return <div className="container-fluid">
      <div className="row">
        <div className="col-md-11 col-md-offset-1">
          <h2>Home</h2>
          <p>This is the home page</p>
        </div>
      </div>
    </div>
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))