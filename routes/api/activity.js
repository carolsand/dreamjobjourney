var express = require('express');
var router = express.Router();
var activityController = require('../controllers/activity');

router.delete('/api/experience/:id/activity/:idx', experienceController.deleteActivity);
router.get('api/experience/new', experienceController.new);
router.get('api/experience/:id/actvity/new', experienceController.new);
router.post('api/experience/:id/actvity', experienceController.addToExperience);

module.exports = router;