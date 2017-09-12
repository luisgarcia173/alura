import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/pure-min.css';
import './css/side-menu.css';
import AutorBox from './Autor';

class App extends Component {

  render() {
    return (
      <div id="layout">
      {/*<!-- Menu toggle -->*/}
        <a href="#menu" id="menuLink" className="menu-link">
          {/*<!-- Hamburger icon -->*/}
          <span></span>
        </a>
    
        <div id="menu">
          <div className="pure-menu">
              <a className="pure-menu-heading" href="#">BookStore</a>
              <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Author</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Book</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">About</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
              </ul>
          </div>
        </div>
    
        <div id="main">
            <div className="header">
              <h1>Author Registration</h1>
              <h2>Please fill the form with the Author data</h2>
            </div>
    
            <div className="content">
              <h2 className="content-subhead">Why should you input Authors in our database?</h2>
              <p>
                  Each Author is responsible for explain their published work, it means you only can registrate a new Author if his has at least a book published.
              </p>
              <AutorBox />
            </div>
        </div>
    </div>
    );
  }
}

export default App;
