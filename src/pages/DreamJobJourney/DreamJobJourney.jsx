import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Columns } from 'react-bulma-components';

import Activity from '../../components/Activity/Activity';
import DreamJob from '../../components/DreamJob/DreamJob';
import userService from '../../utils/userService';
import experienceService from '../../utils/experienceService';
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import InfoPage from '../InfoPage/InfoPage';
 
class DreamJobJourney extends Component {
  render() {
    console.log(" ")
    console.log("---> this.props: " + JSON.stringify(this.props));
    console.log("line 17 ---> this.props.user: " + JSON.stringify(this.props.user));
    // console.log("---> this.props.user.profile: " + JSON.stringify(this.props.user.profile));
    //let experience = JSON.stringify(this.props);
    let i = 0;
    //let experience = this.props.user.profile.experiences ? this.props.user.profile.experiences.map(exp => {

    let user = userService.getUser(); 
    let experiences = experienceService.getAllExperiences();
    // user.populate("profile");
      // this.setState {
      //   experience: experience,
      // }

    console.log("---> user: " + JSON.stringify(user));
    console.log("---> experiences: " + JSON.stringify(experiences));
    if (experiences && experiences.length > 0) {
    this.user.experiences.map(exp => {
    console.log("---> in map loop" + experiences);
    i = i + 1;
    return (
      <div style={{ flex: 1 }} key={i}>
        <Activity
          user={this.props.user.profile.experiences}
          name={this.name}
          description={this.props.user.description}
          city={this.props.user.profile.city}
          state={this.props.user.profile.state}
          country={this.props.user.profile.country}
        />
        {/* <DreamJob
          jobTitle={this.props.user.jobTitle}
          description={this.props.user.description}
          salary={this.props.user.salary}
          city={this.props.user.profile.city}
          state={this.props.user.profile.state}
          country={this.props.user.profile.country}

        />  */}
      </div>
     )
    })
   } else { 
    return ( 
      <div style={{ flex: 1 }} key={i}>
        <InfoPage />
      </div>
    )}
   }

    // return (
    //   <Columns>
    //     {experience}
    //   </Columns>
    // );
  }


export default DreamJobJourney;