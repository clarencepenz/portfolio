const express = require('express');
const router = express.Router();
const messageCtrl = require('../controllers/message');


router.post('/',  messageCtrl.createMessage);
router.get('/',  messageCtrl.getMessages);
router.delete('/:mid',  messageCtrl.deleteMessage);


module.exports = router;