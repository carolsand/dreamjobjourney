const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const profileCtrl = require('../../controllers/profile');
const experienceCtrl = require('../../controllers/experience');

/*---------- Public Routes ----------*/
router.get('/', )

/*---------- Protected Routes ----------*/

router.get('/api/experience', experienceCtrl.index);
router.get('/api/experience/new', experienceCtrl.new);
router.post('/api/experience', experienceCtrl.create);
router.get('/api/:id/experience', experienceCtrl.show);
router.delete('/api/:id/experience', experienceCtrl.delete);


module.exports = router;