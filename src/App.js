import React, { Component} from 'react';
import './App.css';

import Resume from './Resume'
import Paper from './Paper'

import { Route, HashRouter, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Paper} />
          <Route path="/resume" component={Resume}/>}/>
        </Switch>
        
      </div>
      </HashRouter>
    );
  }
}

export default App;