const express = require('express');
const router = express.Router();
const experienceCtrl = require('../../controllers/experience');

/*---------- Public Routes ----------*/
router.get('/', )

/*---------- Protected Routes ----------*/

router.get('/', experienceCtrl.getAllExperiences);
router.post('/', experienceCtrl.create);

module.exports = router;