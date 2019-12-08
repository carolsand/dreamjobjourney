var Experience = require('../models/experience');
var Profile = require('../models/profile');
var Activity = require('../models/activity');
var Job = require('../models/job');
// import '../src/utils/userService';
const User = require('../models/user');


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
    console.log('this is suposed to be the loggedin user--->', res)
    /* The point of this function is to create an experience. What is in an experience?
        An experience is associated with a logged in user. The logged in user has a profile
        Update function should update the experience with an activity and job which will be associated
        with the logged in user  */
      
      try {
         if (!req.body.profile) return res.status(400).send('No Input');
          // creating the activity object associate with the user experience
          console.log('Request Body inside create -->', req.body, res.body); 
          /* This next line will find the first instance of a user in the database. It doesnot mean this is
          the current logged in user */             
          // const user = await User.findOne({user: req.body.user});
          // console.log('Request User -->', user);
    
          /* ReQ.user */
          /*req._id and req.user are undefined. Stop trying them */
          // console.log('user ----->', req._id, req.user);

          /*  Creating New Experience */
          let experienceObj = req.body;

          // var experience = new Experience();
          // console.log('New Experience -->', experience);
          // console.log('New User Experience -->', user.experience);

          /* Creating New Activity */
          var activity = new Activity();
          activity = await Activity.create(activity);
          experienceObj.activity = activity;
          // activity.user = req.user.id;
          // console.log('User Activity ---->', experience.activity._id);

          /* creating the job object associate with the user experience */
          var job = new Job();
          job = await Job.create(job);
          experienceObj.jobtitle = job;

          /* What is going on with experienceObj?I think this can be cleaner */ 
          // let activitiesArray = [];
          // activitiesArray.push(activity);
          // experienceObj.activity = activitiesArray;
          console.log('ExperienceObj ------>', experienceObj);

          // let experienceObj = req.body; ---> Already defined on line 41
          let newExperience = await Experience.create(experienceObj);
          // activity = await Activity.create(activity);
          console.log('Line before res.json ----->',experienceObj);
          // Use the experience action to return the list experience(req, res);
          res.json({ newExperience, "Success": true});
      } catch (err) {
        console.log("Error: " + err);
        res.json({ err });
  }
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
  if (req.userId) {
  // const user = req.body.user;
  // const experiences = await Experience.find({user: user._id});
  // const experiences = await Experience.find({});
  // console.log('Hoping to get the logged in user--->', user);
  // res.json(experiences);
 }
  const experiences = await Experience.find({});
  console.log('Hoping to get the logged in user--->', user);
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
