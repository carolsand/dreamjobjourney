var Experience = require('../models/experience');
var Profile = require('../models/profile');

module.exports = {
  create,
  getAllExperiences,
  getExperience,
  // delete: deleteExperience
};

async function create(req, res) {
  try {
    await Experience.create(req.body);
    // Use the experience action to return the list
    experience(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function getExperience(req, res) {
  let experience = {
    name: '',
    description: '',
    activity: '',
    job: '',
    city: '',
    state: '',
    profile: ''
  };
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

async function getAllExperiences(req, res) {
  Profile.findOne({user: req.body.userId})
  console.log('-----> user in getAllExperiences' + user)
     .populate('experience')
     .then(profile => res.json(profile.experience));
}
