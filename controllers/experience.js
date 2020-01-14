var Experience = require('../models/experience');
var Profile = require('../models/profile');
var Activity = require('../models/activity');
var User = require('../models/user');
var Job = require('../models/job');

// const user = require('../src/utils/userService');
// const User = require('../config/auth');


module.exports = {
  createExperience,
  getExperiences,
  getExperience,
  updateExperience,
  deleteExperience
};


async function createExperience(req, res) {
  const user = await User.findOne({email: req.body.email});
  console.log('This is the logged in user:---->', user);

  var experience, ttlExperience, activity, jobtitle;
  try {
    // if (!req.body.passwordConf) return res.status(400).send('REQ.BODY.PASSWORDCONF is undefined');
    let user = req.get('Authorization');
    console.log('The value of REQ.BODY-- and loggedin user----->', req.body, user);
   
    // let activity = await Job.findById(req.body.jobtitle._id);
    // let jobtitle = await Activity.findById(req.body.activity._id);
    ttlExperience = [req.body.name, req.body.description, req.body.city, req.body.state, req.body.country, req.body.profile, req.body.activity, req.body.jobtitle];
    experience = new Experience(ttlExperience);
    console.log('Value of Created Experience: ------>', experience);

  } catch (err) {
    console.log("Error: " + err);
    res.json({ err });
 }
}

async function getExperience(req, res) {
  if(req.body){
    try {
      let user = await Profile.findById(req.params.id);
      let experience= await user.experience.pull(req.body.user);
      return res.json(experience);
    } catch(err) {
      console.log(err);
      return res.status(500).send('Error with request');
    }
  }
}

async function getExperiences(req, res) {
  const user = await User.findOne({ email: req.body.email });
  console.log('This is the logged in user:---->', user);

  if (req.body) {
    // const experiences = await Experience.find({user: user._id});
    // const experiences = await Experience.find({});
    // console.log('Hoping to get the logged in user--->', user);
    // res.json(experiences);
 }
  try {
    const experiences = await Experience.find({user: req.body.email});
    console.log('Hoping to get the logged in user experiences--->', experiences);
    res.json(experiences);
  } catch (err){
    console.log(err) 
      return res.status(400).send('Access Denied');
  }
}


async function updateExperience(req, res) {
  // update one experience based on what the user provided
  if (res){
    try {
      if (!req.body.profile) return res.status(400).send('No Input');
      let user= await User.findById(req.body.user);
      user.preferences.push(req.body);
      user.save();
      await Experience.findByIdAndUpdate(req.params.id, req.body);
      // await Activity.findById(req.params.id, req.body)
      // Use the experience action to returnj to the list
      // experience(req, res);
    
    } catch (err) {
      res.json({ err });
   }
  }
}

async function getOneExperience(req, res) {
  console.log('Inside getOneExperience function REQ==--->', req);
  // const experience = Experience.findById({user: user._id})
  const experience = Experience.findById({id: req.userId});
  console.log('getOneExperience function --->', experience);
  res.json(experience);
}

async function deleteExperience(req, res) {
  const experience = await Experience.findOneAndDelete(req.params._id, experience._id);
  res.json();
}


