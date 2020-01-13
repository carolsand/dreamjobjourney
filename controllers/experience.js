var Experience = require('../models/experience');
var Profile = require('../models/profile');
var Activity = require('../models/activity');
var Job = require('../models/job');
// import '../src/utils/userService';
const User = require('../config/auth');


module.exports = {
  createExperience,
  updateExperience,
  getExperiences,
  getExperience,
  getOneExperience,
  deleteExperience
};

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

async function createExperience(req, res) {
  console.log('The value of user id from request---->', req.body.user_id);
  var experience, ttlExperience;
  try {
    // if (!req.body.passwordConf) return res.status(400).send('REQ.BODY.PASSWORDCONF is undefined');
    console.log('The value of REQ.BODY------->', req.body);
   
    ttlExperience = [req.body.name, req.body.description, req.body.city, req.body.state, req.body.country, req.body.profile, req.body.activity[0], req.body.jobtitle];
    experience = new Experience(ttlExperience);
    console.log('Value of Created Experience: ------>', experience);

  } catch (err) {
    console.log("Error: " + err);
    res.json({ err });
 }
}


async function getExperienceOld(req, res) {
  Profile.findOne({user:req.body.user}, req.params.id)
    .populate('experience')
    .then(exp => {
      let experience = exp.experience[exp.experience.length -1];
      experience.save((err, exp) => {
        prof.exp.push(exp._id);
        prof.save();
      });
    });
  res.json(experience);
}

async function getExperience(req, res) {
  try {
    let user = await Profile.findById(req.params.id);
    let experience= await user.experience.pull(req.body.user);
    return res.json(experience);
  } catch(err) {
    console.log(err);
    return res.status(500).send('Error with request');
  }
}

async function getExperiences(req, res) {
  if (req.body) {
  // const user = req.body.user;
  // const experiences = await Experience.find({user: user._id});
  // const experiences = await Experience.find({});
  // console.log('Hoping to get the logged in user--->', user);
  // res.json(experiences);
 }
  const experiences = await Experience.find({});
  console.log('Hoping to get the logged in user--->', req.body.user);
  res.json(experiences);
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

async function delPref(req, res) {
  try {
    let user = await User.findById(req.body.user);
    let experience = await Experience.findById(req.body.user);
    user.profile.pull(req.body.id);
    user.save();
    return res.json(user);
  } catch(err) {
    console.log(err);
    return res.status(500).send('Error with delete');
  }
 }

