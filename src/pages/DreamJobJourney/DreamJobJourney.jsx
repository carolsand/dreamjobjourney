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
    let experience = JSON.stringify(this.props);
    let experiences = this.props.user.experiences ? this.props.user.experiences.map(exp => {
    console.log("---> contents of experience " + experience);
    let i = 0;
    i = i + 1;
    return (
      <div style={{ flex: 1 }} key={i}>
        <Activity
          user={this.user}
          name={this.name}
          description={this.description}
          city={this.city}
          state={this.state}
          country={this.country}
        />
        <DreamJob
          // user={this.user.req.id}
          jobTitle={this.props.jobTitle}
          description={this.props.description}
          salary={this.props.salary}
          city={this.props.city}
          state={this.props.state}
          country={this.props.country}

        /> 
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