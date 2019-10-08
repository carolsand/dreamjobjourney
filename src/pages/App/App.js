import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import DreamJobJourney from '../../pages/DreamJobJourney/DreamJobJourney';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }
  render() {
    // let winTries = this.getWinTries();
    return (
      <div>
        <header className='header-footer'>R E A C T &nbsp;&nbsp;&nbsp; Dream Job Journey </header>
        <Switch>
          <Route exact path='/' render={() =>
            <DreamJobJourney
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/dream-job-journey' render={() =>
            userService.getUser() ?
              <DreamJobJourney
              />
              :
              <Redirect to='/login' />
          } />
          <Route exact path='/profile' render={() =>
            userService.getUser() ?
              <Profile
              />
              :
              <Redirect to='/login' />
          } />
        </Switch>
      </div>
    );
  }
}




export default App;
