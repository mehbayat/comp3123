const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  const userData = JSON.parse(fs.readFileSync(path.join(__dirname, '../user.json'), 'utf8'));
  res.json(userData);
});



/*
- Modify /login router to accept username and password as JSON body parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login', (req,res) => {
  const { username, password } = req.body;
  const userData = JSON.parse(fs.readFileSync(path.join(__dirname, '../user.json'), 'utf8'));

  if (username !== userData.username) {
    return res.json({
      status: false,
      message: "User Name is invalid"
    });
  }

  if (password !== userData.password) {
    return res.json({
      status: false,
      message: "Password is invalid"
    });
  }

  res.json({
    status: true,
    message: "User Is valid"
  });
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  const username = req.query.username;
  res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = router;