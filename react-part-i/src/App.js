import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {
  render() {
    return (
      /*<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
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
      
              {/* Form */}
              <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">
                  <fieldset>
                    <legend>Author Data</legend>
                    <div className="pure-control-group">
                      <label htmlFor="name">Name</label> 
                      <input id="name" type="text" name="name" value="" placeholder="Name" />                  
                    </div>
                    <div className="pure-control-group">
                      <label htmlFor="email">Email</label> 
                      <input id="email" type="email" name="email" value="" placeholder="Email"  />                  
                    </div>
                    <div className="pure-control-group">
                      <label htmlFor="password">Password</label> 
                      <input id="password" type="password" name="password" placeholder="Password" />                                      
                    </div>
                    <div className="pure-control-group">                                  
                      <label></label> 
                      <button type="submit" className="pure-button pure-button-primary">Save</button>                                    
                    </div>
                  </fieldset>
                </form>
              </div> 

              {/* Table */}
              <div>
                <fieldset>
                  <legend>Author's List</legend>            
                  <table className="pure-table pure-u-5-5">
                    <thead>
                      <tr>
                        <th width="75%">Name</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alberto</td>                
                        <td>alberto.souza@caelum.com.br</td>                
                      </tr>
                    </tbody>
                  </table>
                </fieldset>
              </div>     

            </div>
        </div>
    </div>
    );
  }
}

export default App;
