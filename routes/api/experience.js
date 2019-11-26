const express = require('express');
const router = express.Router();
const experienceCtrl = require('../../controllers/experience');

/*---------- Public Routes ----------*/
// router.get('/', )

/*---------- Protected Routes ----------*/

router.get('/:id', experienceCtrl.getOneExperience);
router.get('/', experienceCtrl.getAllExperiences);
router.post('/', experienceCtrl.createExperience);
router.post('/:id', experienceCtrl.updateExperience);

module.exports = router;