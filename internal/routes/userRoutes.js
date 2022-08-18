const express = require('express');
const router = express.Router();

// get middleware auth function
const {requireAuth} = require('../middleware/authMiddleware');

// Get controller
const userController = require("../controllers/userController");

// user routes
router.post('/create', userController.signUp);
router.post('/login', userController.login);
router.get('/:id', requireAuth, userController.detail);

module.exports = router;