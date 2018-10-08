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
                <Switch>
                  <Route exact path="/redux-user" render={() => <h1>Please, enter login you would like to find into the search line</h1>} />
                  <Route path="/redux-user/:login" render={(props) => <User {...props}/>} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
