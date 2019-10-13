import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import DreamJobJourney from '../../pages/DreamJobJourney/DreamJobJourney';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import experienceService from '../../utils/experienceService';
import tokenService from '../../utils/tokenService';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Section, Container } from 'react-bulma-components';
import InfoPage from '../InfoPage/InfoPage';
import ExperiencePage from '../ExperiencePage/ExperiencePage';

let activityData = require('../../activity.json');
let jobsData = require('../../jobs.json');

class App extends Component {
  constructor() {
    super();
   //console.log("---> activityData: " + JSON.stringify(activityData));
    //console.log("---> jobsData: " + JSON.stringify(jobsData));
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser(),
      user: [],
      // experience: experienceService.getAllExperiences(),
      experience: [],
      activity: [],
      job: '',
      profile: '',
    };
  }

  // async componentDidMount () {
  //   let experience = await experienceService.getAllExperiences(this.props.user);
  //   console.log('------> experience is mounted' + experience);
  //   this.setState({
  //     experience: experience
  //   });
  // }

  handleGetAllExperiences = (experiences) => {
    this.setState({ experiences });
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

  handleExperienceSearch = (e) => {
    this.setState({ user: experienceService.getAllExperiences()});
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

  handleCreateExperience = () => {
    this.setState({user: experienceService.create()})
  }

  render() {
    return ( 
      <div>
        <header className='header-footer'> &nbsp;&nbsp;&nbsp; Dream Job Journey </header>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
        <Switch>
          <Route exact path='/' render={() =>
           < InfoPage />
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
          <Route exact path='/experience-page' render={() =>
            this.state.user ?
            <ExperiencePage
             user={this.state.user}
             experiences={this.state.experiences}
             handleGetAllExperiences={this.handleGetAllExperiences}
            //  {...this.state}
            />
            :
              <Redirect to='/dream-job-journey' />
          } />
          <Route exact path='/dream-job-journey' render={() =>
              this.state.user ?
              <DreamJobJourney
                user={this.state.user}
                {...this.state}
              />
              :
              <Redirect to='/login' />
          } />
        </Switch> 
         <InfoPage />
      </div>
    );
  }
}




export default App;
