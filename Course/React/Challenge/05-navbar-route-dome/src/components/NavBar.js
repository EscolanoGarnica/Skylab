import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import React,{Component} from 'react'
import './NavBar.css';

class NavBar extends Component {

    render() {
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">React Strap</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><NavLink to='/Home' activeClassName='active'>Home</NavLink></li>
                        <li><NavLink to='/Contact' activeClassName='active'>Contact</NavLink></li>
                        <li><NavLink to='/About' activeClassName='active'>About</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}

export default NavBar
