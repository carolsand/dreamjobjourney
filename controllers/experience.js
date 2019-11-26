var Experience = require('../models/experience');
var Profile = require('../models/profile');
var Activity = require('../models/activity');
var Job = require('../models/job');
var User = require('../models/user')

module.exports = {
  createExperience,
  updateExperience,
  getAllExperiences,
  getExperience,
  getOneExperience,
  delete: deleteExperience
};

async function updateExperience(req, res) {
  // update one experience based on what the user provided
  if (req.user){
    try {
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
  /* The point of this function is to create an experience. What is in an experience?
      An experience is associated with a logged in user. The logged in user has a profile
      Update function should update the experience with an activity and job which will be associated
      with the logged in user  */
      const user = await User.findOne({user: req.body.user});
      try {
    // creating the activity object associate with the user experience

    console.log('Request Body -->', req.body);              
    console.log('Request User -->', req.user);
    var activity = new Activity();
    // activity.user = req.user.id;
    console.log('User Activity ---->', activity.user);
    activity.name = "";

    /* What is going on with experienceObj?I think this can be cleaner */ 
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

async function getAllExperiences(req, res) {
  const user = await User.findOne({user: req.body.user});
  const experiences = await Experience.find({user: user._id});
  res.json(experiences);
}

async function getOneExperience(req, res) {
  const user = await User.findOne({user: req.body.user});
  const experience = Experience.findById({user: user._id})
     .populate('experience')
     .then(experience => res.json(experience));
     console.log(experience);
}

async function deleteExperience(req, res) {
  const experience = await Experience.findOneAndDelete(req.params._id, experience._id);
  res.json();
}
