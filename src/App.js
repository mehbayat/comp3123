import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const studentId = '101533701';
  const studentName = 'Mehrad Bayat';
  const college = 'George Brown College, Toronto';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>
        <p className="student-id">{studentId}</p>
        <p className="student-name">{studentName}</p>
        <p className="college">{college}</p>
      </header>
    </div>
  );
}

export default App;
