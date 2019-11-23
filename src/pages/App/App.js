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
      profile: experienceService.getAllExperiences(),
    };
  }

  async componentDidMount () {
    let experience = await experienceService.getAllExperiences(this.props.user);
    const experiences = await experienceService.getAllExperiences();
    this.setState({experience, experiences});
  }

  handleGetAllExperiences = (experiences) => {
    const experience = experienceService.getAllExperiences();
    this.setState({ experience, experiences });
  }

  getNewExperience = () => {
    const experience = experienceService.getOneExperience();
    this.setState({experience});
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
              history={history}
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
              experiences={this.state.experiences}
              handleGetAllExperiences={this.handleGetAllExperiences}
              
            />
            :
              <Redirect to='/InfoPage' />
          } />
          <Route exact path='/experience-page' render={() =>
            this.state.user ?
            <ExperiencePage
             user={this.state.user}
             experiences={this.state.experiences}
             handleGetAllExperiences={this.handleGetAllExperiences}
             
            />
            :
              <Redirect to='/InfoPage' />
          } />
          <Route exact path='/dream-job-journey' render={({ history }) =>
              this.state.user ?
              <DreamJobJourney
              history={ history }
              // experiences={this.state.experiences}
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
