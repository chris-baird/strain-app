import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navMenuOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleToggleNavMenu = this.handleToggleNavMenu.bind(this);
  }

  handleToggleNavMenu() {
    this.setState({ navMenuOpen: !this.state.navMenuOpen });
  }

  handleClick() {
    console.log('hey');
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <LandingPage />;
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
