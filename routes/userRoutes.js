const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { signupValidation, loginValidation } = require('../middleware/validation');

// POST /api/v1/user/signup - Create new user
router.post('/signup', signupValidation, userController.signup);

// POST /api/v1/user/login - User login
router.post('/login', loginValidation, userController.login);

module.exports = router;
