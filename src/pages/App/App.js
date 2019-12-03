import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import DreamJobJourney from '../../pages/DreamJobJourney/DreamJobJourney';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';
import userService from '../../utils/userService';
import experienceService from '../../utils/experienceService';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bulma-components/dist/react-bulma-components.min.css';
import InfoPage from '../InfoPage/InfoPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import ExperiencePage from '../ExperiencePage/ExperiencePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null
      user: userService.getUser(),
      experiences: [],
      activity: [],
      job: {},
      profile: userService.getUser(),
    };
  }

  async componentDidMount () {
    let experience = await experienceService.getAllExperiences();
    const experiences = await experienceService.getAllExperiences();
    this.setState({experience, experiences});
  }

  handleGetAllExperiences = (experiences) => {
    const experience = experienceService.getAllExperiences();
    this.setState({ experience, experiences });
  }

  handleGetNewExperience = (experience) => {
    const newExperience = experienceService.getOneExperience();
    this.setState({newExperience, experience});
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
      <div className=""> 
        <header className='container'> &nbsp;&nbsp;&nbsp; Dream Job Journey </header>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
            />
         <Switch>
          <Route exact path='/' render={({ history }) =>
            < InfoPage 
              handleSignupOrLogin={this.handleSignupOrLogin}
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
          <Route exact path='/profilepage' render={() =>
            this.state.user ?
            <ProfilePage
              user={this.state.user}
              experiences={this.state.experiences}
              handleGetAllExperiences={this.handleGetAllExperiences}
              
            />
            :
              <Redirect to='/dream-job-journey' />
          } />
          <Route exact path='/experience-page' render={() =>
            this.state.user ?
            <ExperiencePage
             user={this.state.user}
             experiences={this.state.experiences}
             handleCreateExperience={this.handleCreateExperience}
             handleGetNewExperience={this.handleGetNewExperience}
             
            />
            :
              <Redirect to='/InfoPage' />
          } />
          <Route exact path='/dream-job-journey' render={() =>
              this.state.user ?
              <DreamJobJourney
              handleGetAllExperiences={this.handleGetAllExperiences}
              user={this.state.user}              
              experiences={this.state.experiences}
                 
              />
              :
              <Redirect to='/InfoPage' />
          } />
        </Switch> 
      </div>
    );
  }
}

export default App;
