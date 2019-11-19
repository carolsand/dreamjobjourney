var Experience = require('../models/experience');
var Profile = require('../models/profile');
var Activity = require('../models/activity');
var Job = require('../models/job');
var util = require('util');

module.exports = {
  create,
  update,
  getAllExperiences,
  getExperience,
  getOneExperience,
  delete: deleteExperience
};

async function update(req, res) {
  // update one experience based on what the user provided
  try {
    await Experience.create(req.body);
    // Use the experience action to return the list
    experience(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function create(req, res) {
  try {
    // creating the activity object associate with the user experience
    var activity = new Activity();
    activity.name = "";
    let experienceObj = req.body;
    let activitiesArray = [];
    activitiesArray.push(activity);
    experienceObj.activity = activitiesArray;
    // creating the job object associate with the user experience
    var job = new Job();
    job.jobtitle = "";
    // let experienceObj = req.body; ---> Already defined on line 41
    experienceObj.jobtitle = job;
    let experience = await Experience.create(experienceObj);
    activity = await Activity.create(activity);
    job = await Job.create(job);
    // Use the experience action to return the list experience(req, res);
    res.json({ experienceObj, "Success": true});
  } catch (err) {
    console.log("Error: " + err);
    res.json({ err });
  }
}

async function getExperience(req, res) {
  Profile.findOne({user:req.body.userId})
    .populate('experience')
    .then(exp => {
      let experience = exp.experience[exp.experience.length -1];
      experience.save((err, exp) => {
        prof.exp.push(exp._id)
        prof.save()
      })
    })
  res.json(experience);
}

async function getAllExperiences(req, res) {
  const experiences = await Experience.find({user:req.body.user}, req.params._id)
  console.log('Users Experiences------>', experiences)
  // console.log('Users req------>', req)
  console.log('Users response------>', res)
  res.json(experiences);
}

async function getOneExperience(req, res) {
  Experience.findById(req.params._id, experience._id)
     .populate('experience')
     .then(experience => res.json(experience));
     console.log(experience)
}

async function deleteExperience(req, res) {
  const experience = await Experience.findOneAndDelete(req.params._id, experience._id)
  res.json()
}
