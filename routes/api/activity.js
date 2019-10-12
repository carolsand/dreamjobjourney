var express = require('express');
var router = express.Router();
var experienceController = require('../../controllers/experience');

router.get('/', experienceController.new);
router.get('/:id', experienceController.new);
// router.post('api/experience/:id/actvity', experienceController.addToExperience);
// router.delete('/api/experience/:id/activity/:idx', experienceController.deleteActivity);

module.exports = router;