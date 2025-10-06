# 101533701_COMP3123-exec05

**Student Name:** Mehrad Bayat  
**Student ID:** 101533701  
**Course:** COMP3123 - Full Stack Development  
**Exercise:** Lab Week 05 - Express.js Basics with Routing

## Description

This project demonstrates Express.js routing fundamentals including:
- Serving static HTML files
- Returning JSON data from files
- Implementing user authentication with JSON body parameters
- Query parameter handling
- Error handling middleware

## Project Structure

```
101533701_COMP3123-exec05/
├── index.js           # Main Express application
├── routes/
│   └── users.js       # User-related routes
├── home.html          # Home page HTML file
├── user.json          # User data for authentication
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Installation

1. Navigate to the project folder:
```bash
cd 101533701_COMP3123-exec05
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node index.js
```

The server will start on port 8081.

## API Endpoints

### 1. Home Page
- **Route:** `GET /home`
- **Description:** Serves the home.html page
- **Response:** HTML page with welcome message

### 2. User Profile
- **Route:** `GET /api/v1/user/profile`
- **Description:** Returns user details from user.json
- **Response:** JSON object with user details

### 3. User Login
- **Route:** `POST /api/v1/user/login`
- **Description:** Authenticates user with username and password
- **Request Body:**
```json
{
  "username": "bret",
  "password": "bret@123"
}
```
- **Responses:**
  - Valid credentials: `{"status": true, "message": "User Is valid"}`
  - Invalid username: `{"status": false, "message": "User Name is invalid"}`
  - Invalid password: `{"status": false, "message": "Password is invalid"}`

### 4. User Logout
- **Route:** `GET /api/v1/user/logout?username=<username>`
- **Description:** Logs out user and displays confirmation message
- **Response:** HTML message confirming logout

## Testing

Test the API endpoints using Postman or curl:

```bash
# Test home page
curl http://localhost:8081/home

# Test user profile
curl http://localhost:8081/api/v1/user/profile

# Test login (valid)
curl -X POST http://localhost:8081/api/v1/user/login \
  -H "Content-Type: application/json" \
  -d '{"username":"bret","password":"bret@123"}'

# Test logout
curl "http://localhost:8081/api/v1/user/logout?username=bret"
```

## Section B: Short Answer Questions

### 6. Purpose of express.Router()

`express.Router()` is used to create modular, mountable route handlers in Express.js. It allows developers to:
- Organize routes into separate modules for better code structure
- Create mini-applications with their own middleware and routes
- Promote code reusability and maintainability
- Enable cleaner separation of concerns by grouping related routes together

In this project, `express.Router()` is used in `routes/users.js` to group all user-related routes (profile, login, logout) into a single module that can be mounted at `/api/v1/user`.

### 7. Error Handling in Express.js

Error handling in Express.js is implemented using error-handling middleware functions that have four arguments: `(err, req, res, next)`. This middleware should be defined after all other middleware and routes.

Example implementation:
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});
```

For route-specific errors, you can use try-catch blocks:
```javascript
app.get('/route', async (req, res, next) => {
  try {
    // Route logic
  } catch (err) {
    next(err); // Pass error to error handler
  }
});
```

## Section C: Bonus

### 7. Dynamic Port Binding

The line `app.listen(process.env.port || 8081)` implements dynamic port binding:

- **process.env.port:** Reads the port number from environment variables
- **|| 8081:** Falls back to port 8081 if no environment variable is set
- **Production Benefits:**
  - Cloud platforms (Heroku, AWS, Azure) dynamically assign ports via environment variables
  - Allows the same codebase to run in different environments without code changes
  - Enhances security by not hardcoding port numbers
  - Enables flexible deployment configurations

## Author

Mehrad Bayat - Student ID: 101533701

## License

This project is created for educational purposes as part of COMP3123 coursework.
