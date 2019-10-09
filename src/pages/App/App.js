import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import DreamJobJourney from '../../pages/DreamJobJourney/DreamJobJourney';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Experience from '../../components/Experience/Experience';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';

let activityData = require('../../activity.json');
let jobsData = require('../../jobs.json');

class App extends Component {
  constructor() {
    super();
    console.log("---> activityData: " + JSON.stringify(activityData));
    console.log("---> jobsData: " + JSON.stringify(jobsData));
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser(),
      activity: activityData,
      jobs: jobsData
    };
  }

  handleActivitySearch = (e) => {
    this.setState({ user: userService.getUser() });
    let activity = activityData;
    if (e.target.value) {
      activity = activity.filter(p => {
        return p.name.includes(e.target.value)
      });
    }
    this.setState({ activity })
  }

  handleJobSearch = (e) => {
    this.setState({user: userService.getUser()});
    let job = jobsData;
    if (e.target.value) {
      job = job.filter(p => {
        return p.name.includes(e.target.value)
      });
    }
    this.setState({ job })
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

          <Section>
            <Container>
              <DreamJobJourney
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
           </Container>
         </Section>
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
              <Redirect to='/' />
          } />
        </Switch>
      </div>
    );
  }
}




export default App;
