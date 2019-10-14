const express = require('express');
const router = express.Router();
const experienceCtrl = require('../../controllers/experience');

/*---------- Public Routes ----------*/
// router.get('/', )

/*---------- Protected Routes ----------*/

router.get('/:id', experienceCtrl.getOneExperience);
router.get('/', experienceCtrl.getAllExperiences);
router.post('/', experienceCtrl.create);
router.post('/:id', experienceCtrl.update);
// router.post('/:id', experienceCtrl.deleteExperience);

module.exports = router;