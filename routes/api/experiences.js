const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');
const profileCtrl = require('../../controllers/profile');
const experienceCtrl = require('../../controllers/experience');

/*---------- Public Routes ----------*/
router.get('/', )

/*---------- Protected Routes ----------*/

router.get('/api', experienceCtrl.get);
router.create('/api/experience', experienceCtrl.create);
router.post('/api/:id/experience', experienceCtrl.post);
router.put('/api/:id/', experienceCtrl.update);
router.delete('/api/:id', experienceCtrl.delete);



module.exports = router;