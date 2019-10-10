var express = require('express');
var router = express.Router();
var profileController = require('../controllers/profile');

router.get('api/profile/new', profileController.new);
router.post('api/profile/:id/experience', profileController.addToExperience);
router.get('api/profile/:id/experience/new', profileController.new);
// new route below
router.delete('/api/profile/:id/experience/:idx', profileController.deleteProfile);

module.exports = router;