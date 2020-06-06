const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/user');
const auth = require('../middleware/auth');


router.post('/login',  usersCtrl.getUser);
router.post('/signup',   usersCtrl.createUser);



module.exports = router;