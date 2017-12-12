import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink to='/'>Route 1</NavLink>
          <NavLink to='/2'>Route 2</NavLink>
          <NavLink to='/3'>Route 3</NavLink>
        </header>
        { routes }
      </div>
    );
  }
}

export default App;
