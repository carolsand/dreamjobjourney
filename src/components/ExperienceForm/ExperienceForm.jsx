import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import experienceService from '../../utils/experienceService';
import './ExperienceForm.css';
import Button from 'react-bootstrap/Button';


class ExperienceForm extends Component {
  constructor(props) {
    super();
  this.state = {
    name: '',
    description: '',
    activity: [],
    jobtitle: {}, 
    city: '',
    state:'',
    country: '',
    passwordConf:''
  };
  }
  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }
  handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await experienceService.addJobToExperience(this.state);
    }catch (err){
      console.log('Invalid user data');
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await experienceService.create(this.state);
      // Let <App> know a experience was created!
      this.props.handleCreateExperience();
      // Successfully created experience - show experience Experience page
      this.props.history.push('/');
    } catch (err) { 
      console.log('Invalid user data');
      // this.props.updateMessage(err.message);
    }
  }

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
            <input name='jobtitle' />
          </label>
          &nbsp;&nbsp;&nbsp;
          <label>
            <span>Activity</span>
            <select name='FunToDo'>
                <option value="activity"></option>
                <option value="activity">Hiking</option>
                <option value="activity">Sailing</option>
                <option value="activity">Cooking</option>
                <option value="activity">Surfing</option>
                <option value="activity">Singing</option>
                <option value="activity">Clubing</option>
                <option value="activity">Water Sking</option>
                <option value="activity">Softball</option>
                <option value="activity">Helicopter Rides</option>
                <option value="activity">Shopping</option>
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
              <select name='location'>
                <option value="country"></option>
                <option value="country">Senegal</option>
                <option value="country">France</option>
                <option value="country">Israel</option>
                <option value="country">Fiji</option>
                <option value="country">Brussels</option>
                <option value="country">England</option>
                <option value="country">Morocco</option>
                <option value="country">Nigeria</option>
                <option value="country">Ethiopia</option>
                <option value="country">United States</option>
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
