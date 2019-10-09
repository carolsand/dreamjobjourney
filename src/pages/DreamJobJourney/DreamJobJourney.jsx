import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Columns } from 'react-bulma-components';

import NavBar from '../../components/NavBar/NavBar';
import Activity from '../../components/Activity/Activity';
import DreamJob from '../../components/DreamJob/DreamJob';

class DreamJobJourney extends Component {
  render() {
    let experience = this.props.experience.map(exp => {
   
    return (
      <div style={{flex: 1}}>
        <Activity
          // user={user.req.id}
          // id={this.activity.id}
          name={this.exp.name}
          description={this.exp.description}
          loc_city={this.exp.loc_city}
          loc_state={this.exp.loc_state}
          loc_country={this.exp.loc_country}
          // backImage={journey.sprites.back_shiny}
          // frontImage={journey.sprites.front_shiny}
        />
        <DreamJob
          // user={this.user.req.id}
          name={this.dreamJob.name}
          description={this.dreamJob.description}
          salary={this.dreamJob.salary}
          location={this.dreamJob.location}

        />
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