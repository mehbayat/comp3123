# COMP3123 Lab Test 1

**Student Name:** Mehrad Bayat
**Student ID:** 101533701
**Course:** COMP3123 - Full Stack Development I
**Date:** October 2, 2025

## Project Structure

```
101533701_comp3123_labtest1/
├── question-1/
│   └── lowerCaseWords.js
├── question-2/
│   ├── callbacks.js
│   └── promises.js
├── question-3/
│   ├── add.js
│   └── remove.js
└── README.md
```

## Question 1: ES6 Features

**File:** `question-1/lowerCaseWords.js`

Creates a function `lowerCaseWords` that:
- Takes a mixed array as input
- Returns a promise that filters non-strings and converts remaining words to lowercase
- Handles errors appropriately

**Usage:**
```bash
node question-1/lowerCaseWords.js
```

## Question 2: Promises

**Files:**
- `question-2/callbacks.js` - Original callback implementation
- `question-2/promises.js` - Promise-based implementation

Implements:
- `resolvedPromise()` - resolves a message after 500ms timeout
- `rejectedPromise()` - rejects with error message after 500ms timeout

**Usage:**
```bash
node question-2/callbacks.js
node question-2/promises.js
```

## Question 3: File Module

**Files:**
- `question-3/add.js` - Creates log directory and files
- `question-3/remove.js` - Removes log files and directory

Features:
- Creates/removes Logs directory
- Generates 10 log files with content
- Outputs file operations to console

**Usage:**
```bash
node question-3/add.js
node question-3/remove.js
```

## Testing

All scripts can be run individually using Node.js. Each script includes console output to verify functionality.