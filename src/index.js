import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'normalize.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Login from './Login';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(<Router>
        <Route>
            <div>
                <Route exact path="/" component={ Login }></Route>
                <Route path="/main" component={ Main }></Route>
            </div>
        </Route>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
