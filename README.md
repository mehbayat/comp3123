# COMP3123 Assignment 1 - Backend API

**Student Name:** Mehrad Bayat
**Student Number:** 101533701
**Course:** COMP3123 - Full Stack Development
**Assignment:** Assignment 1 - Backend (10%)

## Description

A RESTful API built with Node.js, Express, and MongoDB for user management and employee management. This API supports CRUD operations, validation, proper HTTP status codes, and JWT authentication.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Database name: `comp3123_assigment1`)
- **Authentication:** JWT (JSON Web Tokens)
- **Password Hashing:** bcrypt
- **Validation:** express-validator
- **Environment Variables:** dotenv

## Project Structure

```
comp3123/
├── config/
│   └── database.js          # MongoDB connection configuration
├── controllers/
│   ├── userController.js    # User logic (signup, login)
│   └── employeeController.js # Employee CRUD logic
├── models/
│   ├── User.js              # User schema
│   └── Employee.js          # Employee schema
├── routes/
│   ├── userRoutes.js        # User endpoints
│   └── employeeRoutes.js    # Employee endpoints
├── middleware/
│   └── validation.js        # Request validation rules
├── .env                     # Environment variables (not committed)
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies
├── server.js               # Main application file
└── README.md               # This file
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mehbayat/comp3123.git
   cd comp3123
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following:
   ```env
   PORT=3000
   MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

4. **Update MongoDB connection:**

   Replace `your_username` and `your_password` in the `MONGODB_URI` with your actual MongoDB credentials.

## Running the Application

### Development Mode (with nodemon):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### User Endpoints

#### 1. User Signup
- **URL:** `POST /api/v1/user/signup`
- **Status:** `201 Created`
- **Request Body:**
  ```json
  {
    "username": "johndoe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User created successfully.",
    "user_id": "64c9e5a3d9f3c1a5c9b4e8a1"
  }
  ```

#### 2. User Login
- **URL:** `POST /api/v1/user/login`
- **Status:** `200 OK`
- **Request Body (with email):**
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Request Body (with username):**
  ```json
  {
    "username": "johndoe",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Login successful.",
    "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```

### Employee Endpoints

#### 3. Get All Employees
- **URL:** `GET /api/v1/emp/employees`
- **Status:** `200 OK`
- **Response:**
  ```json
  [
    {
      "employee_id": "64c9e5a3d9f3c1a5c9b4e8a2",
      "first_name": "Jane",
      "last_name": "Doe",
      "email": "jane.doe@example.com",
      "position": "Software Engineer",
      "salary": 90000,
      "date_of_joining": "2023-08-01T00:00:00.000Z",
      "department": "Engineering"
    }
  ]
  ```

#### 4. Create Employee
- **URL:** `POST /api/v1/emp/employees`
- **Status:** `201 Created`
- **Request Body:**
  ```json
  {
    "first_name": "Alice",
    "last_name": "Johnson",
    "email": "alice.johnson@example.com",
    "position": "Designer",
    "salary": 85000,
    "date_of_joining": "2023-08-10T00:00:00.000Z",
    "department": "Design"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Employee created successfully.",
    "employee_id": "64c9e5a3d9f3c1a5c9b4e8a4"
  }
  ```

#### 5. Get Employee by ID
- **URL:** `GET /api/v1/emp/employees/:eid`
- **Status:** `200 OK`
- **Example:** `GET /api/v1/emp/employees/64c9e5a3d9f3c1a5c9b4e8a4`
- **Response:**
  ```json
  {
    "employee_id": "64c9e5a3d9f3c1a5c9b4e8a4",
    "first_name": "Alice",
    "last_name": "Johnson",
    "email": "alice.johnson@example.com",
    "position": "Designer",
    "salary": 85000,
    "date_of_joining": "2023-08-10T00:00:00.000Z",
    "department": "Design"
  }
  ```

#### 6. Update Employee
- **URL:** `PUT /api/v1/emp/employees/:eid`
- **Status:** `200 OK`
- **Example:** `PUT /api/v1/emp/employees/64c9e5a3d9f3c1a5c9b4e8a4`
- **Request Body (partial update allowed):**
  ```json
  {
    "position": "Senior Designer",
    "salary": 95000
  }
  ```
- **Response:**
  ```json
  {
    "message": "Employee details updated successfully."
  }
  ```

#### 7. Delete Employee
- **URL:** `DELETE /api/v1/emp/employees?eid=xxx`
- **Status:** `204 No Content`
- **Example:** `DELETE /api/v1/emp/employees?eid=64c9e5a3d9f3c1a5c9b4e8a4`
- **Response:** No body (204 status)

## Error Responses

All error responses follow this format:

```json
{
  "status": false,
  "message": "Error description here"
}
```

Common error status codes:
- `400 Bad Request` - Invalid input or validation errors
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server-side errors

## Validation Rules

### User:
- Username: required, min 3 characters
- Email: required, valid email format
- Password: required, min 6 characters

### Employee:
- First name: required, max 100 characters
- Last name: required, max 100 characters
- Email: required, valid email format, unique
- Position: required, max 100 characters
- Salary: required, must be a positive number
- Date of joining: required, valid date format (ISO 8601)
- Department: required, max 100 characters

## Testing with Postman

1. Import the provided Postman collection
2. Set the base URL to `http://localhost:3000`
3. Test each endpoint with the sample payloads provided above
4. For login, save the JWT token from the response
5. (Optional) Use the token in Authorization header for protected routes

## Sample Test Credentials

For testing purposes, you can use these credentials after signing up:

**User 1:**
- Username: `mehrad_bayat`
- Email: `mehrad.bayat@example.com`
- Password: `password123`

**User 2:**
- Username: `testuser`
- Email: `testuser@example.com`
- Password: `test1234`

## MongoDB Database

- **Database Name:** `comp3123_assigment1`
- **Collections:**
  - `users` - Stores user accounts
  - `employees` - Stores employee records

## Deployment

### Vercel Deployment

This API can be deployed to Vercel. Follow these steps:

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Create `vercel.json` in the root directory (already provided)

3. Deploy:
   ```bash
   vercel
   ```

4. Set environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV`

## GitHub Repository

Repository URL: [https://github.com/mehbayat/comp3123](https://github.com/mehbayat/comp3123)

## Notes

- All passwords are hashed using bcrypt before storing in the database
- JWT tokens expire after 24 hours
- The database name must be exactly `comp3123_assigment1` as per assignment requirements
- All endpoints return JSON responses
- CORS is enabled for cross-origin requests

## Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.5.0",
  "bcrypt": "^5.1.1",
  "jsonwebtoken": "^9.0.2",
  "express-validator": "^7.0.1",
  "dotenv": "^16.3.1",
  "cors": "^2.8.5"
}
```

## Dev Dependencies

```json
{
  "nodemon": "^3.0.1"
}
```

## License

ISC

## Contact

For questions or issues, contact:
- **Name:** Mehrad Bayat
- **Student #:** 101533701
- **Email:** mehrad.bayat@example.com
