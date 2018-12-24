import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Browse } from './pages'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/browse" component={Browse} />
        </Switch>
      </div>
    );
  }
}

export default App;
