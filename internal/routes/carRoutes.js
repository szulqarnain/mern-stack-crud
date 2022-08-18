const express = require('express');
const router = express.Router();

// get middleware auth function
const {requireAuth} = require('../middleware/authMiddleware');

// get controller
const carController = require("../controllers/carController");

// cars routes
router.post('/create', [requireAuth], carController.create);
router.put('/:id', [requireAuth], carController.update);
router.delete('/:id', [requireAuth], carController.delete);
router.get('/', [requireAuth], carController.list);
router.get('/:id', [requireAuth], carController.detail);

module.exports = router;