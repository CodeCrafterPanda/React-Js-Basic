import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Addbook from './components/Addbook';
import Books from './components/Books';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="row">
              <Switch>
                <Route exact path="/" component={Books} />
                <Route exact path="/add-book" component={Addbook} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
