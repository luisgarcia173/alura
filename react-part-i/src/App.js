import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './css/pure-min.css';
import './css/side-menu.css';
import './css/blog.css';
import { Route, Link } from 'react-router-dom'
import AutorBox from './Autor';
import Home from './Home';

class App extends Component {

  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>
    
        <div id="menu">
          <div className="pure-menu">
              <a className="pure-menu-heading" href="/">BookStore</a>
              <ul className="pure-menu-list">
                <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home</Link></li>
                <li className="pure-menu-item"><Link to="/autor" className="pure-menu-link">Author</Link></li>
                <li className="pure-menu-item"><Link to="/livro" className="pure-menu-link">Book</Link></li>
                <li className="pure-menu-item"><Link to="/sobre" className="pure-menu-link">About</Link></li>
                <li className="pure-menu-item"><Link to="/contato" className="pure-menu-link">Contact</Link></li>
              </ul>
          </div>
        </div>
    
        <Route exact path="/" component={Home} />
        <Route path="/autor" component={AutorBox}/>
        <Route path="/livro"/>

    </div>
    );
  }
}

export default App;
