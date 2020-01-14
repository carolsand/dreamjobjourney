const express = require('express');
const router = express.Router();
const verify = require('../verifytoken');
const experienceCtrl = require('../../controllers/experience');

/*---------- Public Routes ----------*/
// router.get('/', )

/*---------- Protected Routes ----------*/

router.get('/', verify, experienceCtrl.getExperiences);
router.get('/', experienceCtrl.getExperience);
router.post('/', experienceCtrl.createExperience);
router.post('/:id', experienceCtrl.updateExperience);
router.delete('/:id', experienceCtrl.deleteExperience);

module.exports = router;