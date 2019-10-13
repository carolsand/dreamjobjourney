import React, { Component } from 'react';
import Activity from '../../components/Activity/Activity';
import userService from '../../utils/userService';
import experienceService from '../../utils/experienceService';
import ExperiencePage from '../ExperiencePage/ExperiencePage';
import ExperienceForm from '../../components/ExperienceForm/ExperienceForm';
 
class DreamJobJourney extends Component {
  render() {
    console.log(" ")
    console.log("---> this.props: " + JSON.stringify(this.props));
    console.log("line 17 ---> this.props.user: " + JSON.stringify(this.props.user.experineces));
    // console.log("---> this.props.user.profile: " + JSON.stringify(this.props.user.profile));
    //let experience = JSON.stringify(this.props);
    let i = 0;
    //let experience = this.props.user.profile.experiences ? this.props.user.profile.experiences.map(exp => {

    let user = userService.getUser(); 
    let experiences = experienceService.getAllExperiences();
    // user.populate("profile");
    //   this.setState {
    //     experience: experience,
    //   }

    console.log("---> user: " + JSON.stringify(user));
    console.log("---> experiences: " + JSON.stringify(experiences));
    if (experiences && experiences.length > 0) {
      console.log("---> if ");
      this.user.experiences.map(exp => {
      console.log("---> in map loop" + experiences);
      i = i + 1;
      return (
        <div style={{ flex: 1 }} key={i}>
          <ExperiencePage

          />
        </div>
      )
      })
   } else { 
      console.log("---> else ");
    return ( 
      <div style={{ flex: 1 }} key={i}>
        <ExperienceForm />
      </div>
    )}
   }
  }


export default DreamJobJourney;