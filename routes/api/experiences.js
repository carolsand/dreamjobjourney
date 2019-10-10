const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const profileCtrl = require('../../controllers/profile');
const experienceCtrl = require('../../controllers/experience');

/*---------- Public Routes ----------*/
router.get('/', )

/*---------- Protected Routes ----------*/

router.get('/api/dreamjobjourney', experienceCtrl.index);
router.get('/api/dreamjobjourney/new', experienceCtrl.new);
router.post('/api/dreamjobjourney', experienceCtrl.create);
router.get('/api/:id/dreamjobjourney', experienceCtrl.show);
router.delete('/api/:id/dreamjobjourney', experienceCtrl.delete);


module.exports = router;