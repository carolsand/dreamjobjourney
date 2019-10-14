import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card } from 'react-bulma-components';
import './DreamJob.css';

const DreamJob = (props) => {
  return (
    <div className="card-image column is-one-third">
      <Card>
        <Link to= 'experience'>
          <div className="card-image" >
            <h1>Where are the props?</h1>
          </div>
          <div className="card-content">
            <h1 class="title is-3">
              {props.user}
            </h1>
            {props}
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default DreamJob;