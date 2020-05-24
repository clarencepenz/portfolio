const express = require('express');
const router = express.Router();
const projectCtrl = require('../controllers/project');


router.post('/',  projectCtrl.createProject);
router.get('/',  projectCtrl.getProjects);
router.delete('/:pid',  projectCtrl.deleteProject);


module.exports = router;