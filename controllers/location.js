var Location = require('../models/location');

module.exports = {
  createUserProfile,
  getProfile
};

async function createUserProfile(req, res) {
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
  const profile = await Profile.find({})
    .sort({ name: 1, email: 1 })
    // Default to a limit of 20 high scores
    // if not specified in a query string
    .limit(req.query.limit || 20);
  res.json(profile);
}