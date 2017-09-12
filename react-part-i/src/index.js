import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom'

/* 
  BrowserRouter: rotas dinamicas
  HashRouter: rotas estaticas
*/
ReactDOM.render(
  (
    <Router>
        <App />
    </Router>
  ),
  document.getElementById('root')
);
registerServiceWorker();
