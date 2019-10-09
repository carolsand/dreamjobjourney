import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Columns } from 'react-bulma-components';

import NavBar from '../../components/NavBar/NavBar';
import Activity from '../../components/Activity/Activity';
import DreamJob from '../../components/DreamJob/DreamJob';

class DreamJobJourney extends Component {
  render() {
    console.log(" ")
    console.log(" ")
    console.log("---> this.props: " + JSON.stringify(this.props));
    //let experience = this.props.experience.map(exp => {
      
    //console.log("---> this.props.user: " + JSON.stringify(this.props.user));
    console.log(" ")
    console.log(" ")
    let i = 0;
    let experience = this.props.user.experiences.map(exp => {
    i = i + 1;
    return (
      <div style={{ flex: 1 }} key={i}>
        <Activity
          // user={user.req.id}
          // id={this.activity.id}
          name={exp.name}
          description={exp.description}
          loc_city={exp.city}
          loc_state={exp.state}
          loc_country={exp.country}
          // backImage={journey.sprites.back_shiny}
          // frontImage={journey.sprites.front_shiny}
        />
        {/* <DreamJob
          // user={this.user.req.id}
          name={this.dreamJob.name}
          description={this.dreamJob.description}
          salary={this.dreamJob.salary}
          location={this.dreamJob.location}

        /> */}
      </div>
     )
    }); 

    return (
      <Columns>
        {experience}
      </Columns>
    );
  }
}

export default DreamJobJourney;