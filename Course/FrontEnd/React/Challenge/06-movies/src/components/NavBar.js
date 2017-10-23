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
						<li><NavLink to='/popular'>Popular Movies</NavLink></li>
						<li><NavLink to='/upcoming'>Upcoming Movies</NavLink></li>
						<li><NavLink to='/nowPlaying'>Now Playing Movies</NavLink></li>
						<li><NavLink to='/topRated'>Top Rated Movies</NavLink></li>
					</ul>
					</div>
				</div>
			</div>
		</nav>
	}
}

export default NavBar 