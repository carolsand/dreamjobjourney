import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../LoginPage/LoginPage.css';

class ProfilePage extends Component {
  
  render(){ 
    return (

    <div className="ProfilePage">
      <header className="header-footer">Log In</header>
      <form className="form-horizontal" onSubmit={this.handleSubmit} >
        <div className="form-group">
          <div className="col-sm-12">
            <input type="name" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="city" className="form-control" placeholder="Location City" value={this.state.city} name="city" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="state" className="form-control" placeholder="Location State" value={this.state.state} name="state" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12">
            <input type="country" className="form-control" placeholder="Location City" value={this.state.country} name="country" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default">Submit Profile</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
          </div>
        </div>
      </form>
    </div>
   );
  }
}

export default ProfilePage;
