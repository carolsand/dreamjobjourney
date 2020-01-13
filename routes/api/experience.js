const express = require('express');
const router = express.Router();
const experienceCtrl = require('../../controllers/experience');

/*---------- Public Routes ----------*/
// router.get('/', )

/*---------- Protected Routes ----------*/

router.get('/', experienceCtrl.getExperiences);
router.get('/:id', experienceCtrl.getExperience);
router.post('/', experienceCtrl.createExperience);
router.post('/:id', experienceCtrl.updateExperience);
router.delete('/:id', experienceCtrl.deleteExperience);

module.exports = router;