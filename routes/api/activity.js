var express = require('express');
var router = express.Router();
var activityController = require('../controllers/activity');

router.delete('/api/experience/:id/activity/:idx', activityController.deleteActivity);
router.get('api/experience/new', activityController.new);
router.get('api/experience/:id/actvity/new', activityController.new);
// new route below
router.post('api/experience/:id/actvity', activityController.addToExperience);

module.exports = router;