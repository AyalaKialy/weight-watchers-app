const express = require('express');
const router = express.Router();
const controller = require('../controller/user.controller')

router.get('/:id', controller.getUserById);
router.get('/', controller.getAllUsers);
router.post('/', controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser)

module.exports = router;




