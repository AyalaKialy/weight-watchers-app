const express = require('express');
const router = express.Router();
const controller = require('../controller/meeting.controller')

router.get('/:id', controller.getMeetingById);
router.get('/', controller.getAllMeetings);
router.post('/', controller.createMeeting);
router.put('/:id', controller.updateMeeting);
router.delete('/:id', controller.deleteMeeting)

module.exports = router;