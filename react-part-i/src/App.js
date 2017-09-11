import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lista : [],
      nome: '', email: '', senha: ''
    };
    this.enviaForm = this.enviaForm.bind(this); // associa o this do react dentro desse metodo
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  componentDidMount() {
    // Executa após o render ser executado
    $.ajax({
      url:"http://cdc-react.herokuapp.com/api/autores",
      dataType: 'json',
      success:function(resposta){
        this.setState({lista:resposta}); // chama o render novamente
      }.bind(this)
    });
  }

  componentWillMount() {
    // Executa antes do render ser executado
  }

  enviaForm(evento) {
    evento.preventDefault();

    $.ajax({
      url:"http://cdc-react.herokuapp.com/api/autores",
      contentType: 'application/json',
      dataType: 'json',
      type: 'post',
      data: JSON.stringify({nome: this.state.nome, email: this.state.email, senha: this.state.senha}),
      success:function(resposta){
        this.setState({lista: resposta});
        console.log("enviado com sucesso");
      }.bind(this),
      error:function(resposta){
        console.log("erro");
      }
    });
  }

  setNome(evento) { this.setState({nome: evento.target.value}); }
  setEmail(evento) { this.setState({email: evento.target.value}); }
  setSenha(evento) { this.setState({senha: evento.target.value}); }

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
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                  <fieldset>
                    <legend>Author Data</legend>
                    <div className="pure-control-group">
                      <label for="name">Name</label> 
                      <input id="name" type="text" name="name" value={this.state.nome} onChange={this.setNome} placeholder="Name" required/>                  
                    </div>
                    <div className="pure-control-group">
                      <label for="email">Email</label> 
                      <input id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} placeholder="Email" required/>                  
                    </div>
                    <div className="pure-control-group">
                      <label for="password">Password</label> 
                      <input id="password" type="password" name="password" value={this.state.senha} onChange={this.setSenha} placeholder="Password" required/>                                      
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
                      {
                        this.state.lista.map(function(autor) {
                          return (
                            <tr key={autor.id}>
                              <td>{autor.nome}</td>                
                              <td>{autor.email}</td>                
                            </tr>
                          );
                        })
                      }
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
