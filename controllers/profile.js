var Profile = require('../models/profile');

module.exports = {
  createUserProfile,
  getProfile
};

async function createUserProfile(req, res, next) {
  console.log('user: ', req.user)
  try {
    await Profile.create(req.body);
    // Use the highScores action to return the list
    profile(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function getProfile(req, res) {
  if (user)
  const profile = await Profile.find({})
    .sort({ name: 1, email: 1 })
  console.log(profile);  
  res.json(profile);
}