import React,{Component} from 'react'
import { HashRouter, Route, NavLink } from 'react-router-dom'

class NavBar extends Component{
	render(){
		return <nav className='navbar navbar-inverse'>
			<div className="container-fluid">
               <div className="navbar-header">
               		<div  className="navbar-collapse collapse">
               		<a className='navbar-brand'>Movie Collection</a>
					<ul className="nav navbar-nav">
						<li><NavLink to='/list-users'>List users</NavLink></li>
						<li><NavLink to='/create-user'>Create user</NavLink></li>
					</ul>
					</div>
				</div>
			</div>
		</nav>
	}
}

export default NavBar 