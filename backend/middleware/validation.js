const { body } = require('express-validator');

// User signup validation
exports.signupValidation = [
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address')
        .normalizeEmail(),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

// User login validation
exports.loginValidation = [
    body('password')
        .notEmpty().withMessage('Password is required'),
    body()
        .custom((value, { req }) => {
            if (!req.body.email && !req.body.username) {
                throw new Error('Either email or username is required');
            }
            return true;
        })
];

// Employee creation validation
exports.createEmployeeValidation = [
    body('first_name')
        .trim()
        .notEmpty().withMessage('First name is required')
        .isLength({ max: 100 }).withMessage('First name cannot exceed 100 characters'),
    body('last_name')
        .trim()
        .notEmpty().withMessage('Last name is required')
        .isLength({ max: 100 }).withMessage('Last name cannot exceed 100 characters'),
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address')
        .normalizeEmail(),
    body('position')
        .trim()
        .notEmpty().withMessage('Position is required')
        .isLength({ max: 100 }).withMessage('Position cannot exceed 100 characters'),
    body('salary')
        .notEmpty().withMessage('Salary is required')
        .isNumeric().withMessage('Salary must be a number')
        .custom((value) => {
            if (value < 0) {
                throw new Error('Salary must be a positive number');
            }
            return true;
        }),
    body('date_of_joining')
        .notEmpty().withMessage('Date of joining is required')
        .isISO8601().withMessage('Please provide a valid date'),
    body('department')
        .trim()
        .notEmpty().withMessage('Department is required')
        .isLength({ max: 100 }).withMessage('Department cannot exceed 100 characters')
];

// Employee update validation (fields are optional)
exports.updateEmployeeValidation = [
    body('first_name')
        .optional()
        .trim()
        .notEmpty().withMessage('First name cannot be empty')
        .isLength({ max: 100 }).withMessage('First name cannot exceed 100 characters'),
    body('last_name')
        .optional()
        .trim()
        .notEmpty().withMessage('Last name cannot be empty')
        .isLength({ max: 100 }).withMessage('Last name cannot exceed 100 characters'),
    body('email')
        .optional()
        .trim()
        .notEmpty().withMessage('Email cannot be empty')
        .isEmail().withMessage('Please provide a valid email address')
        .normalizeEmail(),
    body('position')
        .optional()
        .trim()
        .notEmpty().withMessage('Position cannot be empty')
        .isLength({ max: 100 }).withMessage('Position cannot exceed 100 characters'),
    body('salary')
        .optional()
        .isNumeric().withMessage('Salary must be a number')
        .custom((value) => {
            if (value < 0) {
                throw new Error('Salary must be a positive number');
            }
            return true;
        }),
    body('date_of_joining')
        .optional()
        .isISO8601().withMessage('Please provide a valid date'),
    body('department')
        .optional()
        .trim()
        .notEmpty().withMessage('Department cannot be empty')
        .isLength({ max: 100 }).withMessage('Department cannot exceed 100 characters')
];
