const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/api/projects', projectController.getAllProjects);
router.post('/api/projects', projectController.createProject);
router.get('/api/projects:id', projectController.getProjectById);
router.put('/api/projects:id', projectController.updateProject);
router.delete('/api/projects:id', projectController.deleteProject);

module.exports = router;
