const express = require('express');
const router = express.Router();

// get middleware auth function
const {requireAuth} = require('../middleware/authMiddleware');

// Get Controller
const categoryController = require("../controllers/categoryController");

// Categories Routes
router.post('/create', [requireAuth], categoryController.create);
router.put('/:id', [requireAuth], categoryController.update);
router.delete('/:id', [requireAuth],categoryController.delete);
router.get('/', [requireAuth], categoryController.list);
router.get('/:id', [requireAuth], categoryController.detail);

module.exports = router;