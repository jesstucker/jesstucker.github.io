import React, { Component} from 'react';
import './App.css';

import Resume from './Resume'
import Paper from './Paper'

import { Route, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Paper} />
          <Route path="/resume" component={Resume}/>
        </Switch>
        
      </div>
      </Router>
    );
  }
}

export default App;