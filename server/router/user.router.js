const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller')
const diaryController = require('../controller/diary.controller');

router.get('/:id/diary', diaryController.getDiaryUser);
router.post('/:id/diary', diaryController.addNewDaySummary);
router.put('/:id/diary/:dayId', diaryController.updateDaySummary);
router.delete('/:id/diary/:dayId', diaryController.deleteDaySummary);

router.get('/:id', userController.getUserById);
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser)

module.exports = router;