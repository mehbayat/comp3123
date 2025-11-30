# COMP3123 Assignment 2 - Full Stack Employee Management System

**Student Name:** Mehrad Bayat
**Student Number:** 101533701

## Project Description

This is a full-stack employee management system built with the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to manage employee records with full CRUD operations, search functionality, and profile picture uploads.

## Features

### Backend (Node.js + Express + MongoDB)
- RESTful API with Express.js
- MongoDB database with Mongoose ODM
- User authentication (signup/login) with JWT
- Employee CRUD operations
- Employee search by department and position
- File upload for employee profile pictures using Multer
- Input validation and error handling
- CORS enabled for frontend communication

### Frontend (React + Material-UI)
- Modern UI with Material-UI components
- React Router for navigation
- TanStack Query (React Query) for efficient data fetching and caching
- Axios for API requests
- User authentication with session management (localStorage + Context API)
- Protected routes
- Employee List with search functionality
- Add/Edit/View/Delete employee operations
- Profile picture upload and display
- Responsive design

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- Multer for file uploads
- Express Validator
- CORS
- dotenv

### Frontend
- React 18
- Material-UI (MUI)
- React Router v6
- TanStack Query
- Axios
- Context API for state management

### DevOps
- Docker & Docker Compose
- Separate containers for MongoDB, Backend, and Frontend

## Project Structure

```
101533701_comp3123_assignment/
├── docker-compose.yml
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── employeeController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── upload.js
│   │   └── validation.js
│   ├── models/
│   │   ├── Employee.js
│   │   └── User.js
│   ├── routes/
│   │   ├── employeeRoutes.js
│   │   └── userRoutes.js
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   ├── Dockerfile
│   └── .env
└── frontend/
    ├── public/
    ├── src/
    │   ├── api/
    │   │   ├── axios.js
    │   │   ├── auth.js
    │   │   └── employees.js
    │   ├── components/
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── pages/
    │   │   ├── Login.js
    │   │   ├── Signup.js
    │   │   ├── EmployeeList.js
    │   │   ├── AddEmployee.js
    │   │   ├── EditEmployee.js
    │   │   └── EmployeeDetails.js
    │   ├── App.js
    │   └── index.js
    ├── package.json
    ├── Dockerfile
    └── .env
```

## API Endpoints

### User Routes
- `POST /api/v1/user/signup` - Create new user account
- `POST /api/v1/user/login` - User login

### Employee Routes
- `GET /api/v1/emp/employees` - Get all employees
- `POST /api/v1/emp/employees` - Create new employee (with file upload)
- `GET /api/v1/emp/employees/:eid` - Get employee by ID
- `PUT /api/v1/emp/employees/:eid` - Update employee (with file upload)
- `DELETE /api/v1/emp/employees?eid=xxx` - Delete employee
- `GET /api/v1/emp/employees/search?department=xxx&position=xxx` - Search employees

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- Docker & Docker Compose
- MongoDB (if running locally without Docker)

### Option 1: Using Docker (Recommended)

1. Clone the repository
```bash
cd 101533701_comp3123_assignment
```

2. Build and start all containers
```bash
docker-compose up --build
```

3. Access the application
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000
- MongoDB: mongodb://localhost:27017

4. Stop the containers
```bash
docker-compose down
```

### Option 2: Local Development

#### Backend Setup
```bash
cd backend
npm install
# Create .env file with your MongoDB connection string
npm start
```

#### Frontend Setup
```bash
cd frontend
npm install
# Create .env file with backend API URL
npm start
```

## Usage

1. **Sign Up**: Create a new user account
2. **Login**: Login with your credentials
3. **View Employees**: See all employees in a table format
4. **Search Employees**: Filter by department or position
5. **Add Employee**: Create new employee with profile picture
6. **Edit Employee**: Update employee information
7. **View Details**: See detailed employee information
8. **Delete Employee**: Remove employee from the system
9. **Logout**: End your session

## Screenshots

Screenshots are available in the submission folder showing:
- Login and Signup screens
- Employee List with data
- Search functionality
- Add Employee form
- Edit Employee form
- Employee Details view
- Delete confirmation
- MongoDB database data
- Postman API testing

## Testing

The API has been thoroughly tested using Postman. All endpoints return appropriate status codes and handle errors gracefully.

## GitHub Repositories

- Backend: https://github.com/mehbayat/comp3123
- Full Assignment: https://github.com/mehbayat/101533701_comp3123_assignment

## Notes

- The application uses JWT for authentication
- Profile pictures are stored in the backend uploads directory
- TanStack Query provides automatic caching and refetching
- All forms include validation
- The UI is fully responsive using Material-UI's Grid system

## Future Enhancements

- Add pagination for employee list
- Implement role-based access control
- Add employee performance tracking
- Export data to CSV/Excel
- Advanced filtering options
- Email notifications

## License

This project is created for educational purposes as part of COMP3123 Full Stack Development course.

---

**Submitted by:** Mehrad Bayat (101533701)
**Course:** COMP3123 - Full Stack Development
**Institution:** George Brown College
