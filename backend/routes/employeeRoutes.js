const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { createEmployeeValidation, updateEmployeeValidation } = require('../middleware/validation');
const upload = require('../middleware/upload');

// GET /api/v1/emp/employees/search - Search employees by department or position
router.get('/employees/search', employeeController.searchEmployees);

// GET /api/v1/emp/employees - Get all employees
router.get('/employees', employeeController.getAllEmployees);

// POST /api/v1/emp/employees - Create new employee
router.post('/employees', upload.single('profile_picture'), createEmployeeValidation, employeeController.createEmployee);

// GET /api/v1/emp/employees/:eid - Get employee by ID
router.get('/employees/:eid', employeeController.getEmployeeById);

// PUT /api/v1/emp/employees/:eid - Update employee by ID
router.put('/employees/:eid', upload.single('profile_picture'), updateEmployeeValidation, employeeController.updateEmployee);

// DELETE /api/v1/emp/employees - Delete employee by ID (query param)
router.delete('/employees', employeeController.deleteEmployee);

module.exports = router;
