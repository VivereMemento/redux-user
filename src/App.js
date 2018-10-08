import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import User from './User/User';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Route path="/redux-user/:login" render={(props) => <User {...props}/>} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
