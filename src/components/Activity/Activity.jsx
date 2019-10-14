import React, { Component } from 'react';
import { Section, Hero, Container, Columns } from 'react-bulma-components';
import './Activity.css';

const Activity = (props) => {
  console.log("Props in activity.jsx --->" + JSON.stringify(props));   
  return (
    <div>
      <h1>Activity Page</h1>
      <Columns>
        <Hero>
          <div className="hero-body">
            {/* <h1 className="title is-2">{props.user.experience.name.charAt(0).toUpperCase() + props.name.slice(1)}</h1> */}
            {/* <h1 className="title is-2">{props.description.charAt(0).toUpperCase() + props.description.slice(1)}</h1>
            <h1 className="title is-2">{props.city.charAt(0).toUpperCase() + props.city.slice(1)}</h1> }
            {console.log("Props in activity.jsx after h1 tag --->" + JSON.stringify(props.city))};
             <h1 className="title is-2">{props.state.charAt(0)[1].toUpperCase() + props.state.slice(1)}</h1>  */}
          </div>
        </Hero>
      </Columns>
    </div>
  )
};

export default Activity;