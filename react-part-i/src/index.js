import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

/* 
  BrowserRouter: rotas dinamicas
  HashRouter: rotas estaticas
*/
ReactDOM.render(
  (
  <BrowserRouter> 
    <Switch>
      <Route path="/" component={App}/>
      <Route path="/autor"/>
      <Route path="/livro"/>
    </Switch>
  </BrowserRouter>
  ),
  document.getElementById('root')
);
registerServiceWorker();
