const express = require('express');
const router = express.Router();
const {submitFormData, updateStatus, filterTasksByStatus, allTasks, updateStatusIfDelayed, notify} = require('../controller/controller');

router.post('/submitForm', submitFormData);
router.put('/update', updateStatus);
router.get('/tasksByStatus', filterTasksByStatus);
router.get('/allTasks', allTasks);
router.get('/updateDelayed', updateStatusIfDelayed);
router.post('/notify', notify);

module.exports = router;