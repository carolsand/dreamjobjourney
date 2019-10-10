import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Columns } from 'react-bulma-components';

import Activity from '../../components/Activity/Activity';
import DreamJob from '../../components/DreamJob/DreamJob';

class DreamJobJourney extends Component {
  render() {
    console.log(" ")
    console.log(" ")
    console.log("---> this.props: " + JSON.stringify(this.props));
    let Activity
    let experience = this.props.user.experiences ? this.props.user.experiences.map(exp => {
    console.log("---> contents of experience " + experience);
    let i = 0;
    i = i + 1;
    return (
      <div style={{ flex: 1 }} key={i}>
        <Activity
          user={this.props.user}
          name={this.props.exp.name}
          description={exp.description}
          city={exp.city}
          state={exp.state}
          country={exp.country}
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
    }) : <Activity />

    return (
      <Columns>
        {experience}
      </Columns>
    );
  }
}

export default DreamJobJourney;