import React, { Component } from 'react';
import {HashRouter, NavLink, Route} from 'react-router-dom'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import NavBar from './NavBar'
import Main from './Main'


class App extends Component {
  
  render() {
    return (
       <div className='container-fluid text-center'>
          <NavBar/>
          <Main/>
        </div>
    );
  }
}

export default App;
