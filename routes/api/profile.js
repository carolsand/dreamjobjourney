
// These routes are not needed for profile creation
var express = require('express');
var router = express.Router();
var profileController = require('../controllers/profile');

router.get('api/profile/new', profileController.new);
router.post('api/profile/', profileController.create);
router.put('api/profile/:id/', profileController.update);
router.get('api/profile/:id//new', profileController.new);
router.delete('/api/profile/:id', profileController.deleteProfile);

module.exports = router;