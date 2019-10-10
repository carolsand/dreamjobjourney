var Experience = require('../models/experience');

module.exports = {
  index,
  show,
  new: newExperience,
  create,
  delete: deleteExperience
};


// async function createUserExperience(req, res) {
//   var experience = await new Experience(req.body);
//   experience.save(function (err) {
//     //handle errors
//     if (err) return res.render('/experience/new');
//     res.redirect(`api/dream-job-journey/${experience._id}`);
//   });
// }

// async function getUserExperience(req, res) {
//   const profile = await Profile.find({})
//     .sort({ name: 1, email: 1 })
//     // Default to a limit of 20 high scores
//     // if not specified in a query string
//     .limit(req.query.limit || 20);
//   res.json(profile);
// }

function newExperience(req, res) {
  res.render('/api/experience/new', { title: 'Add Experience' });
}

async function create(req, res) {
  var experience = await new Experience(req.body);
  experience.save(function (err) {
    //handle errors
    if (err) return res.render('/api/experience/new');
    res.redirect(`/api/experience/${experience._id}`);
  });
}

function index(req, res) {
  Experience.find({}, function (err, experience) {
    res.render('/api/experience/', { title: 'ALL Experiences', experience });
  });
}

function deleteExperience(req, res) {
  Experience.deleteOne({ '_id': req.params.id }, function (err) {
    res.redirect('/api/experience/');
  });
}

function show(req, res) {
  Experience.findById(req.params.id, function (err, experience) {
    // Ticket.find({}).where('_id').nin(flight.ticket)
    Activity.find({ experience: req.params.id }, function (err, activity) {
      console.log(activity);
      res.render('/api/experience/', {
        title: 'Activity Detail', experience, activity
      });
    });
  });
}
