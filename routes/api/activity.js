var express = require('express');
var router = express.Router();
var experienceController = require('../../controllers/experience');

router.get('/', experienceController.new);
router.get('/:id', experienceController.new);

module.exports = router;