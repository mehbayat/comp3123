require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

// Import routes
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'COMP3123 Assignment 1 API',
        student: 'Mehrad Bayat',
        studentNumber: '101533701',
        endpoints: {
            users: {
                signup: 'POST /api/v1/user/signup',
                login: 'POST /api/v1/user/login'
            },
            employees: {
                getAll: 'GET /api/v1/emp/employees',
                create: 'POST /api/v1/emp/employees',
                getById: 'GET /api/v1/emp/employees/:eid',
                update: 'PUT /api/v1/emp/employees/:eid',
                delete: 'DELETE /api/v1/emp/employees?eid=xxx'
            }
        }
    });
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: 'Route not found'
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: false,
        message: err.message || 'Internal server error'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});

module.exports = app;
