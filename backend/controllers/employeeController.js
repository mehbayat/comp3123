const Employee = require('../models/Employee');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

// Get all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().select('-__v');

        const formattedEmployees = employees.map(emp => ({
            employee_id: emp._id,
            first_name: emp.first_name,
            last_name: emp.last_name,
            email: emp.email,
            position: emp.position,
            salary: emp.salary,
            date_of_joining: emp.date_of_joining,
            department: emp.department,
            profile_picture: emp.profile_picture
        }));

        res.status(200).json(formattedEmployees);

    } catch (error) {
        console.error('Get all employees error:', error);
        res.status(500).json({
            status: false,
            message: error.message || 'Server error while fetching employees'
        });
    }
};

// Create new employee
exports.createEmployee = async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: false,
                message: errors.array()[0].msg
            });
        }

        const { first_name, last_name, email, position, salary, date_of_joining, department } = req.body;

        // Check if employee with email already exists
        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            return res.status(400).json({
                status: false,
                message: 'Employee with this email already exists'
            });
        }

        // Create new employee
        const employee = new Employee({
            first_name,
            last_name,
            email,
            position,
            salary,
            date_of_joining,
            department,
            profile_picture: req.file ? `/uploads/${req.file.filename}` : null
        });

        await employee.save();

        res.status(201).json({
            message: 'Employee created successfully.',
            employee_id: employee._id
        });

    } catch (error) {
        console.error('Create employee error:', error);
        res.status(500).json({
            status: false,
            message: error.message || 'Server error while creating employee'
        });
    }
};

// Get employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const { eid } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(eid)) {
            return res.status(400).json({
                status: false,
                message: 'Invalid employee ID format'
            });
        }

        const employee = await Employee.findById(eid).select('-__v');

        if (!employee) {
            return res.status(404).json({
                status: false,
                message: 'Employee not found'
            });
        }

        const formattedEmployee = {
            employee_id: employee._id,
            first_name: employee.first_name,
            last_name: employee.last_name,
            email: employee.email,
            position: employee.position,
            salary: employee.salary,
            date_of_joining: employee.date_of_joining,
            department: employee.department,
            profile_picture: employee.profile_picture
        };

        res.status(200).json(formattedEmployee);

    } catch (error) {
        console.error('Get employee by ID error:', error);
        res.status(500).json({
            status: false,
            message: error.message || 'Server error while fetching employee'
        });
    }
};

// Update employee by ID
exports.updateEmployee = async (req, res) => {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: false,
                message: errors.array()[0].msg
            });
        }

        const { eid } = req.params;

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(eid)) {
            return res.status(400).json({
                status: false,
                message: 'Invalid employee ID format'
            });
        }

        const employee = await Employee.findById(eid);

        if (!employee) {
            return res.status(404).json({
                status: false,
                message: 'Employee not found'
            });
        }

        // Update fields
        const allowedUpdates = ['first_name', 'last_name', 'email', 'position', 'salary', 'date_of_joining', 'department'];
        const updates = Object.keys(req.body);

        updates.forEach(update => {
            if (allowedUpdates.includes(update)) {
                employee[update] = req.body[update];
            }
        });

        // Handle profile picture upload
        if (req.file) {
            employee.profile_picture = `/uploads/${req.file.filename}`;
        }

        await employee.save();

        res.status(200).json({
            message: 'Employee details updated successfully.'
        });

    } catch (error) {
        console.error('Update employee error:', error);
        res.status(500).json({
            status: false,
            message: error.message || 'Server error while updating employee'
        });
    }
};

// Delete employee by ID
exports.deleteEmployee = async (req, res) => {
    try {
        const { eid } = req.query;

        if (!eid) {
            return res.status(400).json({
                status: false,
                message: 'Employee ID is required'
            });
        }

        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(eid)) {
            return res.status(400).json({
                status: false,
                message: 'Invalid employee ID format'
            });
        }

        const employee = await Employee.findByIdAndDelete(eid);

        if (!employee) {
            return res.status(404).json({
                status: false,
                message: 'Employee not found'
            });
        }

        res.status(204).send();

    } catch (error) {
        console.error('Delete employee error:', error);
        res.status(500).json({
            status: false,
            message: error.message || 'Server error while deleting employee'
        });
    }
};

// Search employees by department or position
exports.searchEmployees = async (req, res) => {
    try {
        const { department, position } = req.query;

        if (!department && !position) {
            return res.status(400).json({
                status: false,
                message: 'Please provide at least one search parameter (department or position)'
            });
        }

        // Build search query
        const searchQuery = {};
        if (department) {
            searchQuery.department = { $regex: department, $options: 'i' };
        }
        if (position) {
            searchQuery.position = { $regex: position, $options: 'i' };
        }

        const employees = await Employee.find(searchQuery).select('-__v');

        const formattedEmployees = employees.map(emp => ({
            employee_id: emp._id,
            first_name: emp.first_name,
            last_name: emp.last_name,
            email: emp.email,
            position: emp.position,
            salary: emp.salary,
            date_of_joining: emp.date_of_joining,
            department: emp.department,
            profile_picture: emp.profile_picture
        }));

        res.status(200).json(formattedEmployees);

    } catch (error) {
        console.error('Search employees error:', error);
        res.status(500).json({
            status: false,
            message: error.message || 'Server error while searching employees'
        });
    }
};
