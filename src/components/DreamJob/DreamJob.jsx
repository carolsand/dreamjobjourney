import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card } from 'react-bulma-components';
import './DreamJob.css';

const DreamJob = (props) => {
  // const printableLocation = props.state.map((state, idx) => {
  //   return <p key={idx}><strong>Title:</strong> {jobTitle}</p>;
  // });
  console.log('====================================');
  console.log("These are the props passed from App ----->" + props);
  console.log('====================================');
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