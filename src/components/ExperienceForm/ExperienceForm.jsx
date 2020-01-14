import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import experienceService from '../../utils/experienceService';
import './ExperienceForm.css';


class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        description: '',
        activity: '',
        jobtitle: '', 
        city: '',
        state:'',
        country: '',
        user:''
      };
  }
  
  // handleUpdate = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await experienceService.addJobToExperience(this.state);
  //   }catch (err){
  //     console.log('Invalid user data');
  //   }
  // }

  handleChange = (e) => {
    // this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await experienceService.create(this.state);
    } catch (err) { 
      console.log('Invalid user data');
      // this.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="container">
        <header className="header">Create Your Dream Experience</header>
        &nbsp;&nbsp;&nbsp;
          <form className="form-inline" onSubmit={this.handleChange} >
            <div className="form-inline">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="form-inline">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Description" value={this.state.description} name="description" onChange={this.handleChange} />
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;
            <label>
            <span>Dream Job</span>
            <input name='jobtitle' value={this.state.jobtitle} onChange={this.handleChange} />
          </label>
          &nbsp;&nbsp;&nbsp;
          <label>
            <span>Activity</span>
            <select name='activity' onChange={this.handleChange}>
                <option value={this.state.activity}></option>
                <option value={this.state.activity}>Hiking</option>
                <option value={this.state.activity}>Sailing</option>
                <option value={this.state.activity}>Dining</option>
                <option value={this.state.activity}>Surfing</option>
                <option value={this.state.activity}>Hand Gliding</option>
                <option value={this.state.activity}>Clubing</option>
                <option value={this.state.activity}>Water Sking</option>
                <option value={this.state.activity}>Softball</option>
                <option value={this.state.activity}>Helicopter Rides</option>
                <option value={this.state.activity}>Shopping</option>
              </select>
          </label>
          &nbsp;&nbsp;&nbsp;
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="city" value={this.state.city} name="city" onChange={this.handleChange} />
              </div>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="state" value={this.state.state} name="state" onChange={this.handleChange} />
              </div>
              <hr />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Country</span>
              <select name='country'>
                <option value={this.state.country}></option>
                <option value={this.state.country}>Senegal</option>
                <option value={this.state.country}>France</option>
                <option value={this.state.country}>Israel</option>
                <option value={this.state.country}>Fiji</option>
                <option value={this.state.country}>Brussels</option>
                <option value={this.state.country}>England</option>
                <option value={this.state.country}>Morocco</option>
                <option value={this.state.country}>Nigeria</option>
                <option value={this.state.country}>Ethiopia</option>
                <option value={this.state.country}>United States</option>
              </select>
            </label>
            &nbsp;&nbsp;&nbsp;
            </div>
            <div className="form-group">
              <div className="col-sm-9 text-center">
              &nbsp;&nbsp;&nbsp;
                <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Add Dream Experience</button>
                <hr />
                <Link to='/'>Cancel</Link>
                <hr />
              </div>
            </div>
          </form>
      </div>
    );
  }
}

export default ExperienceForm;
