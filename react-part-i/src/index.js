import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AutorBox from './Autor';

/* 
  BrowserRouter: rotas dinamicas
  HashRouter: rotas estaticas
*/
ReactDOM.render(
  (
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/autor" component={AutorBox}/>
        <Route path="/livro"/>
      </Switch>
    </Router>
  ),
  document.getElementById('root')
);
registerServiceWorker();
