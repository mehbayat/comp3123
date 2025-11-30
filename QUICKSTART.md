# Quick Start Guide

**Student:** Mehrad Bayat | **Student Number:** 101533701

## Running with Docker (Easiest Method)

### Prerequisites
- Docker Desktop installed and running
- Ports 3000, 3001, and 27017 available

### Steps

1. **Navigate to project directory**
   ```bash
   cd 101533701_comp3123_assignment
   ```

2. **Build and start all containers**
   ```bash
   docker-compose up --build
   ```

3. **Wait for all services to start** (this may take a few minutes on first run)
   - You'll see logs from MongoDB, Backend, and Frontend
   - Wait for "Compiled successfully!" message from Frontend

4. **Access the application**
   - Frontend: http://localhost:3001
   - Backend API: http://localhost:3000
   - API Documentation: http://localhost:3000/

5. **Stop the containers**
   ```bash
   docker-compose down
   ```

6. **Clean up (remove all data)**
   ```bash
   docker-compose down -v
   ```

## Running Locally (Development Mode)

### Prerequisites
- Node.js 18+ installed
- MongoDB installed and running locally

### Backend Setup

1. Navigate to backend directory
   ```bash
   cd backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create `.env` file (or use the existing one)
   ```env
   MONGODB_URI=mongodb://localhost:27017/comp3123_assignment
   PORT=3000
   NODE_ENV=development
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the backend server
   ```bash
   npm start
   ```
   Backend will run on http://localhost:3000

### Frontend Setup

1. Open a new terminal and navigate to frontend directory
   ```bash
   cd frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create `.env` file (or use the existing one)
   ```env
   REACT_APP_API_URL=http://localhost:3000/api/v1
   PORT=3001
   ```

4. Start the frontend development server
   ```bash
   npm start
   ```
   Frontend will run on http://localhost:3001

## Testing the Application

### 1. User Authentication

1. **Sign Up**
   - Navigate to http://localhost:3001
   - Click "Sign up here"
   - Fill in:
     - Username: testuser
     - Email: test@example.com
     - Password: password123
     - Confirm Password: password123
   - Click "Sign Up"

2. **Login**
   - Use the credentials you just created
   - Email: test@example.com
   - Password: password123
   - Click "Login"

### 2. Employee Management

Once logged in, you'll be redirected to the Employee List page.

#### Add Employee
1. Click "Add New Employee" button
2. Fill in the form:
   - First Name: John
   - Last Name: Doe
   - Email: john.doe@example.com
   - Position: Software Engineer
   - Department: IT
   - Salary: 75000
   - Date of Joining: Select a date
   - Upload a profile picture (optional)
3. Click "Create Employee"

#### View Employees
- All employees are displayed in a table
- You can see: Photo, Name, Email, Position, Department, Salary, Date Joined

#### Search Employees
1. Use the search filters at the top
2. Enter department (e.g., "IT") or position (e.g., "Engineer")
3. Click "Search"
4. Click "Clear" to see all employees again

#### View Employee Details
1. Click the eye icon (👁️) on any employee row
2. View detailed employee information
3. Click "Edit Employee" or "Back to List"

#### Edit Employee
1. Click the edit icon (✏️) on any employee row
2. Modify the information
3. Optionally change the profile picture
4. Click "Update Employee"

#### Delete Employee
1. Click the delete icon (🗑️) on any employee row
2. Confirm the deletion in the dialog
3. Click "Delete"

### 3. API Testing with Postman

#### Setup
1. Open Postman
2. Create a new collection "COMP3123 Assignment"

#### Test User Endpoints

**1. Signup**
```
POST http://localhost:3000/api/v1/user/signup
Body (JSON):
{
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123"
}
```

**2. Login**
```
POST http://localhost:3000/api/v1/user/login
Body (JSON):
{
  "email": "test@example.com",
  "password": "password123"
}
```
Copy the `token` from the response for subsequent requests.

#### Test Employee Endpoints

**Set Authorization Header**
For all employee endpoints, add header:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

**3. Get All Employees**
```
GET http://localhost:3000/api/v1/emp/employees
```

**4. Create Employee**
```
POST http://localhost:3000/api/v1/emp/employees
Body (form-data):
- first_name: Jane
- last_name: Smith
- email: jane.smith@example.com
- position: Project Manager
- department: Management
- salary: 85000
- date_of_joining: 2024-01-15
- profile_picture: [upload file]
```

**5. Get Employee by ID**
```
GET http://localhost:3000/api/v1/emp/employees/{employee_id}
```

**6. Update Employee**
```
PUT http://localhost:3000/api/v1/emp/employees/{employee_id}
Body (form-data):
- salary: 90000
- position: Senior Project Manager
```

**7. Search Employees**
```
GET http://localhost:3000/api/v1/emp/employees/search?department=IT
GET http://localhost:3000/api/v1/emp/employees/search?position=Engineer
GET http://localhost:3000/api/v1/emp/employees/search?department=IT&position=Engineer
```

**8. Delete Employee**
```
DELETE http://localhost:3000/api/v1/emp/employees?eid={employee_id}
```

## Screenshots to Take

### Frontend Screenshots (5-8 screens)
1. Login Page
2. Signup Page
3. Employee List (with data)
4. Search Results
5. Add Employee Form
6. Edit Employee Form
7. Employee Details View
8. Delete Confirmation Dialog

### Postman Screenshots (5-8 screens)
1. POST /signup
2. POST /login (showing token response)
3. GET /employees (showing all employees)
4. POST /employees (creating employee)
5. GET /employees/:id (getting single employee)
6. GET /employees/search (search results)
7. PUT /employees/:id (updating employee)
8. DELETE /employees (deleting employee)

### MongoDB Screenshot (1 screen)
1. Open MongoDB Compass or use MongoDB CLI
2. Connect to mongodb://localhost:27017
3. Show the comp3123_assignment database with users and employees collections
4. Take screenshot showing sample data

## Troubleshooting

### Docker Issues

**Problem: Port already in use**
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Find and kill process on port 3001
lsof -ti:3001 | xargs kill -9

# Find and kill process on port 27017
lsof -ti:27017 | xargs kill -9
```

**Problem: Containers won't start**
```bash
# Clean up Docker
docker-compose down -v
docker system prune -a
docker-compose up --build
```

### Local Development Issues

**Problem: MongoDB connection failed**
- Make sure MongoDB is running: `brew services start mongodb-community` (Mac)
- Check MongoDB is accessible: `mongosh`

**Problem: Module not found**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Problem: CORS errors**
- Make sure backend is running on port 3000
- Check frontend .env has correct API URL
- Restart both servers

## Sample Test Data

Use this data to quickly populate employees:

```javascript
// Employee 1
{
  "first_name": "Alice",
  "last_name": "Johnson",
  "email": "alice.johnson@company.com",
  "position": "Senior Developer",
  "department": "IT",
  "salary": 95000,
  "date_of_joining": "2022-03-15"
}

// Employee 2
{
  "first_name": "Bob",
  "last_name": "Williams",
  "email": "bob.williams@company.com",
  "position": "Product Manager",
  "department": "Product",
  "salary": 105000,
  "date_of_joining": "2021-06-01"
}

// Employee 3
{
  "first_name": "Carol",
  "last_name": "Davis",
  "email": "carol.davis@company.com",
  "position": "UX Designer",
  "department": "Design",
  "salary": 80000,
  "date_of_joining": "2023-01-20"
}

// Employee 4
{
  "first_name": "David",
  "last_name": "Martinez",
  "email": "david.martinez@company.com",
  "position": "DevOps Engineer",
  "department": "IT",
  "salary": 90000,
  "date_of_joining": "2022-09-10"
}

// Employee 5
{
  "first_name": "Emma",
  "last_name": "Brown",
  "email": "emma.brown@company.com",
  "position": "Marketing Manager",
  "department": "Marketing",
  "salary": 85000,
  "date_of_joining": "2021-11-05"
}
```

## GitHub Repository Setup

To create GitHub repositories:

1. **Backend Repository** (comp3123)
   - Already exists at: https://github.com/mehbayat/comp3123

2. **Full Assignment Repository** (new)
   ```bash
   cd ~/101533701_comp3123_assignment

   # Create repository on GitHub first, then:
   git remote add origin https://github.com/mehbayat/101533701_comp3123_assignment.git
   git branch -M main
   git push -u origin main
   ```

## Support

If you encounter any issues:
1. Check this guide's Troubleshooting section
2. Verify all prerequisites are installed
3. Make sure ports 3000, 3001, and 27017 are available
4. Check Docker Desktop is running (if using Docker)

---

**Student:** Mehrad Bayat (101533701)
**Course:** COMP3123 - Full Stack Development
