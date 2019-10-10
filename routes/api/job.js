var express = require('express');
var router = express.Router();
var jobController = require('../controllers/job');

// router.delete('/api/dreamjobjourney/:id/job/:idx', jobController.deleteJob);
// router.get('/api/dreamjobjourney/experience/:id/job/new', jobController.new);
// new route below
router.post('/experience/:id/job', jobController.addToExperience);
router.delete('/api/experience/:id/job/:idx', jobController.deleteActivity);
router.get('api/experience/new', jobController.new);
router.get('api/experience/:id/job/new', jobController.new);
// new route below
router.post('api/experience/:id/job', jobController.addToExperience);


module.exports = router;