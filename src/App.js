import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Browse, Post, Register, Profile, Company } from './pages'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/browse" component={Browse} />
          {/** Need to work on About, Company, Register, Browse  and Register Company
                Need to format Home, Post, Profile, Company
          */}
          <Route path="/shop/:companyName" component={About} /> 
          <Route path="/post" component={Post} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/company" component={Company} />
        </Switch>
      </div>
    );
  }
}

export default App;
