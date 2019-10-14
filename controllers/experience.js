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
  getOneExperience
  // delete: deleteExperience
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
    var activity = new Activity();
    activity.name = "";
    let experienceObj = req.body;
    let activitiesArray = [];
    activitiesArray.push(activity);
    experienceObj.activity = activitiesArray;
    /* ----------------------------------------------------------------- */
    var job = new Job();
    job.jobtitle = "";
    // let experienceObj = req.body; ---> Already defined on line 41
    console.log("Point 4");
    experienceObj.jobtitle = job;
    console.log(" ");
    console.log(" ");
    console.log("================What's in the experience object? =====================");
    console.log("job: " + util.inspect(job));
    console.log("activitiesArray: " + util.inspect(activitiesArray));
    console.log("experienceObj: " + util.inspect(experienceObj.jobtitle));
    console.log(" ");
    console.log(" ");
    console.log(" ");
    let experience = await Experience.create(experienceObj);
    activity = await Activity.create(activity);
    // TODO Don't forget to save/create JobTitle Object
    job = await Job.create(job);
    console.log(" ");
    console.log(" ");
    console.log(" ");
    // Use the experience action to return the list
    //experience(req, res);
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
      console.log('----> got an experience' + experience);
      experience.save((err, exp) => {
        console.log('experience created:', exp._id);
        prof.exp.push(exp._id)
        prof.save()
      })
    })
  res.json(experience);
}

async function getAllExperiencess(req, res) {
  const experiences = await Experience.find({})
   .sort()
  console.log('----> experiences from database find' + experiences);

  res.json(experiences);
}

async function getAllExperiences(req, res) {
  const experiences = await Experience.find({})
    .sort({ activity_id: 1, job_id: 1 })
    // default to a limit of 20 high scores
    // if not specified in a query string
    .limit(req.query.limit || 20);
  res.json(experiences);
}


async function getOneExperience(req, res) {
  Profile.findOne({user: req.body.userId})
  console.log('-----> user in getOneExperience' + user)
     .populate('experience')
     .then(profile => res.json(profile.experience));
}
