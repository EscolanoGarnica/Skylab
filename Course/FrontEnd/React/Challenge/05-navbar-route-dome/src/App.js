import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import Page from './components/Page'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import { BrowserRouter, Route, Link } from 'react-router-dom'


class App extends Component {
   constructor() {
        super()

        this.state = {
            currentPage: 'home'
        }
    }
  render(){
    return <BrowserRouter>

      
      <div>
        <NavBar/>
          <main>
              <Route path="/Home" component={Jumbotron}/>
              <Route path="/Home" component={HomePage}/>
              <Route path="/Contact" component={ContactPage}/>
              <Route path="/About" component={AboutPage}/>
          
          </main>
        </div>
    </BrowserRouter>
  }
}

export default App;
