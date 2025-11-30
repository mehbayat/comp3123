# COMP3123 Assignment 2 - Complete Submission Guide
**Student:** Mehrad Bayat | **Student #:** 101533701

## ✅ Application is RUNNING!

**Access URLs:**
- Frontend: http://localhost:3001
- Backend API: http://localhost:3000
- MongoDB: localhost:27017

---

## 📋 WHAT YOU NEED TO SUBMIT

1. ✅ Backend ZIP file (without node_modules)
2. ✅ Frontend ZIP file (without node_modules)
3. ✅ MongoDB screenshot (1 screen showing data)
4. ✅ Postman screenshots (5-8 screens of API tests)
5. ✅ Frontend screenshots (5-8 screens of CRUD operations)
6. ✅ Search screenshots (2-3 screens)
7. ✅ GitHub repository links
8. ✅ docker-compose.yml file

---

## 🎯 STEP-BY-STEP INSTRUCTIONS

### STEP 1: Test Frontend & Take Screenshots 📸

Open your browser to: **http://localhost:3001**

#### Screenshot 1: Signup Page
1. Click "Sign up here" link
2. Fill form:
   - Username: `testuser`
   - Email: `test@example.com`
   - Password: `Test123!`
3. **TAKE SCREENSHOT** before clicking "Sign Up"
4. Click "Sign Up"

#### Screenshot 2: Login Page
1. Login with:
   - Email: `test@example.com`
   - Password: `Test123!`
2. **TAKE SCREENSHOT** before clicking "Login"
3. Click "Login" (you'll be redirected to Employee List)

#### Screenshot 3: Empty Employee List
1. **TAKE SCREENSHOT** of the empty employee list page

#### Screenshot 4: Add Employee Form
1. Click "Add Employee" button
2. Fill in the form:
   ```
   First Name: John
   Last Name: Doe
   Email: john.doe@example.com
   Position: Software Engineer
   Salary: 75000
   Date of Joining: 2024-01-15
   Department: IT
   Profile Picture: [upload any image from your computer]
   ```
3. **TAKE SCREENSHOT** before clicking "Add Employee"
4. Click "Add Employee"

#### Screenshot 5: Add More Employees
Add 2-3 more employees with different departments for testing:

**Employee 2:**
```
First Name: Jane
Last Name: Smith
Email: jane.smith@example.com
Position: Manager
Salary: 85000
Date of Joining: 2024-02-01
Department: HR
Profile Picture: [upload image]
```

**Employee 3:**
```
First Name: Bob
Last Name: Johnson
Email: bob.johnson@example.com
Position: Designer
Salary: 70000
Date of Joining: 2024-03-01
Department: Design
Profile Picture: [upload image]
```

#### Screenshot 6: Employee List with Data
1. After adding employees, view the employee list
2. **TAKE SCREENSHOT** showing all employees in the table

#### Screenshot 7: Search by Department
1. In the search box, select "Department"
2. Enter: `IT`
3. Click "Search"
4. **TAKE SCREENSHOT** showing filtered results

#### Screenshot 8: Search by Position
1. Clear the search
2. Select "Position"
3. Enter: `Manager`
4. Click "Search"
5. **TAKE SCREENSHOT** showing filtered results

#### Screenshot 9: View Employee Details
1. Click "View" button on any employee
2. **TAKE SCREENSHOT** of the employee details page

#### Screenshot 10: Edit Employee
1. Click "Edit" button on any employee
2. **TAKE SCREENSHOT** of the edit form
3. Change salary to `90000`
4. Click "Update Employee"

#### Screenshot 11: Delete Confirmation
1. Click "Delete" button on any employee
2. **TAKE SCREENSHOT** of the confirmation dialog
3. Click "Cancel" (don't actually delete)

---

### STEP 2: Test Backend API with Postman 📸

Download Postman: https://www.postman.com/downloads/

#### Test 1: POST /signup
```
Method: POST
URL: http://localhost:3000/api/v1/user/signup
Headers: Content-Type: application/json
Body (JSON):
{
    "username": "postmanuser",
    "email": "postman@example.com",
    "password": "Postman123!"
}
```
**TAKE SCREENSHOT** showing the request and successful response

#### Test 2: POST /login
```
Method: POST
URL: http://localhost:3000/api/v1/user/login
Headers: Content-Type: application/json
Body (JSON):
{
    "email": "postman@example.com",
    "password": "Postman123!"
}
```
**TAKE SCREENSHOT** showing the token in the response
**IMPORTANT:** Copy the `token` value from the response!

#### Test 3: GET All Employees
```
Method: GET
URL: http://localhost:3000/api/v1/emp/employees
Headers:
  Content-Type: application/json
  Authorization: Bearer [PASTE_YOUR_TOKEN_HERE]
```
**TAKE SCREENSHOT** showing all employees

#### Test 4: POST Create Employee
```
Method: POST
URL: http://localhost:3000/api/v1/emp/employees
Headers:
  Authorization: Bearer [PASTE_YOUR_TOKEN_HERE]
Body (form-data - NOT JSON!):
  first_name: Alice
  last_name: Williams
  email: alice.williams@example.com
  position: Developer
  salary: 80000
  date_of_joining: 2024-04-01
  department: IT
  profile_picture: [upload a file]
```
**TAKE SCREENSHOT** showing the request and response

#### Test 5: GET Employee by ID
```
Method: GET
URL: http://localhost:3000/api/v1/emp/employees/[EMPLOYEE_ID]
Headers:
  Authorization: Bearer [PASTE_YOUR_TOKEN_HERE]
```
(Replace [EMPLOYEE_ID] with an actual employee_id from Test 3)
**TAKE SCREENSHOT**

#### Test 6: GET Search Employees by Department
```
Method: GET
URL: http://localhost:3000/api/v1/emp/employees/search?department=IT
Headers:
  Authorization: Bearer [PASTE_YOUR_TOKEN_HERE]
```
**TAKE SCREENSHOT** showing filtered results

#### Test 7: GET Search Employees by Position
```
Method: GET
URL: http://localhost:3000/api/v1/emp/employees/search?position=Manager
Headers:
  Authorization: Bearer [PASTE_YOUR_TOKEN_HERE]
```
**TAKE SCREENSHOT** showing filtered results

#### Test 8: PUT Update Employee
```
Method: PUT
URL: http://localhost:3000/api/v1/emp/employees/[EMPLOYEE_ID]
Headers:
  Authorization: Bearer [PASTE_YOUR_TOKEN_HERE]
Body (form-data):
  salary: 95000
  position: Senior Developer
```
**TAKE SCREENSHOT**

#### Test 9: DELETE Employee
```
Method: DELETE
URL: http://localhost:3000/api/v1/emp/employees?eid=[EMPLOYEE_ID]
Headers:
  Authorization: Bearer [PASTE_YOUR_TOKEN_HERE]
```
**TAKE SCREENSHOT**

---

### STEP 3: MongoDB Screenshot 📸

#### Option A: MongoDB Compass (Recommended)
1. Download: https://www.mongodb.com/try/download/compass
2. Install and open MongoDB Compass
3. Connect to: `mongodb://localhost:27017`
4. Click on `comp3123_assignment` database
5. Click on `employees` collection
6. **TAKE SCREENSHOT** showing all employee documents

#### Option B: Terminal
```bash
docker exec -it comp3123_mongodb mongosh
use comp3123_assignment
db.employees.find().pretty()
```
**TAKE SCREENSHOT** of the output

---

### STEP 4: Create ZIP Files 📦

Run these commands in your terminal:

```bash
# Create backend ZIP (without node_modules)
cd ~/101533701_comp3123_assignment/backend
zip -r ~/Desktop/101533701_backend.zip . -x "node_modules/*" -x ".env" -x "uploads/*"

# Create frontend ZIP (without node_modules)
cd ~/101533701_comp3123_assignment/frontend
zip -r ~/Desktop/101533701_frontend.zip . -x "node_modules/*" -x ".env"

# Verify the ZIPs are created
ls -lh ~/Desktop/*.zip
```

The ZIP files will be on your Desktop.

---

### STEP 5: Create GitHub Repository 🐙

```bash
# Navigate to project
cd ~/101533701_comp3123_assignment

# Create repository on GitHub first:
# Go to: https://github.com/new
# Repository name: 101533701_comp3123_assignment
# Make it Public
# Do NOT initialize with README (we already have one)

# Then link and push:
git remote add origin https://github.com/mehbayat/101533701_comp3123_assignment.git
git branch -M main
git push -u origin main
```

Your GitHub URL will be: https://github.com/mehbayat/101533701_comp3123_assignment

---

### STEP 6: Get docker-compose.yml 📄

The docker-compose.yml file is located at:
```
~/101533701_comp3123_assignment/docker-compose.yml
```

You can copy it to your Desktop:
```bash
cp ~/101533701_comp3123_assignment/docker-compose.yml ~/Desktop/
```

---

## 📤 FINAL SUBMISSION CHECKLIST

Upload these files to your learning management system:

- [ ] `101533701_backend.zip` (from Desktop)
- [ ] `101533701_frontend.zip` (from Desktop)
- [ ] MongoDB screenshot (1 image)
- [ ] Postman screenshots (9 images as shown above)
- [ ] Frontend screenshots (11 images as shown above)
- [ ] GitHub repository URL: https://github.com/mehbayat/101533701_comp3123_assignment
- [ ] `docker-compose.yml` file

---

## 🛠️ USEFUL COMMANDS

### Stop the Application
```bash
cd ~/101533701_comp3123_assignment
docker compose down
```

### Start the Application (after stopping)
```bash
cd ~/101533701_comp3123_assignment
docker compose up -d
```

### View Container Logs
```bash
# Backend logs
docker logs comp3123_backend

# Frontend logs
docker logs comp3123_frontend

# MongoDB logs
docker logs comp3123_mongodb
```

### Check Container Status
```bash
docker ps
```

### Restart Everything
```bash
cd ~/101533701_comp3123_assignment
docker compose down
docker compose up --build -d
```

---

## ⚠️ IMPORTANT NOTE

The correct Docker Compose command is:
```bash
docker compose up --build -d
```
**NOT** `docker-compose` (with a hyphen)

Modern Docker Desktop uses `docker compose` (with a space).

---

## 🎉 You're All Set!

Follow the steps above in order, and you'll have everything you need for submission. Good luck!

If you encounter any issues, check the container logs or restart the containers.
