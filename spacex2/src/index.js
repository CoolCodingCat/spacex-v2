import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
//import App from './App';
import Home from './pages/Homepage';
import NextFlight from './pages/NextFlightResults';
import Rockets from './pages/RocketsResults';
import Roadster from './pages/RoadsterInfo';
import NotFound from './pages/NotFound';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rockets" component={Rockets} />
            <Route path="/roadster" component={Roadster} />
            <Route path="/next" component={NextFlight} />
            <Route component={NotFound} />>
          </Switch>
      </div>
    </Router>
  );

  

  ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
