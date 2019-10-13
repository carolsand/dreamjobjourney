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
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // name: { type: String, max: 100 },
    // price: { any: Schema.Types.Mixed },
    // description: { type: String, max: 100 },
    // city: { type: String, max: 100 },
    // state: { type: String, max: 100 },
    // country: { type: String, max: 100 },
    var activity = new Activity();
    console.log("Point 1");
    // TODO Set the activity.name to whatever the user provided in req.body for the activity section
    activity.name = "";
    console.log("Point 2");
    let experienceObj = req.body;
    console.log("Point 3");
    let activitiesArray = [];
    console.log("Point 4");
    activitiesArray.push(activity);
    console.log("Point 5");
    experienceObj.activity = activitiesArray;
    console.log("Point 6");
    // TODO Do the same thing that you did for Activity for JobTitle
    /* ----------------------------------------------------------------- */

    var job = new Job();
    console.log("Point 1");
    // TODO Set the job.name to whatever the user provided in req.body for the activity section
    job.name = "";
    console.log("Point 2")
    // let experienceObj = req.body; ---> Already defined on line 41
    console.log("Point 4");
    experienceObj.job = job.name;
    experienceObj = experienceObj.activitiesArray + experienceObj.job;
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log("================What's in the experience object? =====================");
    console.log("job: " + util.inspect(job));
    console.log("activitiesArray: " + util.inspect(activitiesArray));
    console.log("experienceObj: " + util.inspect(experienceObj.job));
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log(" ");
    let experience = await Experience.create(experienceObj);
    activity = await Activity.create(activity);
    // TODO Don't forget to save/create JobTitle Object
    jobtitle = await Job.create(job);
    console.log("experience: " + experience);
    console.log(" ");
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
