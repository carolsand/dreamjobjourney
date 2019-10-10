var Experience = require('../models/experience');

module.exports = {
  createUserExperience,
  getUserExperience
};


async function createUserExperience(req, res) {
  var experience = await new Experience(req.body);
  experience.save(function (err) {
    //handle errors
    if (err) return res.render('/experience/new');
    res.redirect(`api/dream-job-journey/${experience._id}`);
  });
}

async function getUserExperience(req, res) {
  const profile = await Profile.find({})
    .sort({ name: 1, email: 1 })
    // Default to a limit of 20 high scores
    // if not specified in a query string
    .limit(req.query.limit || 20);
  res.json(profile);
}

