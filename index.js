const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Define a route to check if the given number is positive or negative
app.get('/checked-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;

  if (number >= 0) {
    result = 'positive';
  } else {
    result = 'negative';
  }

  res.send('number is ' + result);
});

// Define a route to check if the given number is odd or even
app.get('/evenodd', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;

  if (number % 2 === 0) {
    result = 'even';
  } else {
    result = 'odd';
  }

  res.send('number is ' + result);
});

// Define a route to check if the user is logged in or not
app.get('/check-login', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) {
    result = 'User is logged In';
  } else {
    result = 'User is not logged In';
  }

  res.send(result);
});

//Define a route to check if user is eligible for discount or not
app.get('/check-discount', (req, res) => {
  let age = parseFloat(req.query.age);
  let result;
  if (age >= 65) {
    result = 'User is eligible for discount';
  } else {
    result = 'User is not eligible for discount';
  }
  res.send(result);
});

//Define a route to check the given number is -ve, +ve or zero
app.get('/check-number-type', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number === 0) {
    result = 'Number is zero';
  } else if (number > 0) {
    result = 'Number is positive';
  } else if (number < 0) {
    result = 'Number is negative';
  }
  res.send(result);
});

//Define a route to check the given temperature is lie in which zone like HOT,WARM and COLD
app.get('/check-temperature-zone', (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result;
  if (temperature < 15) {
    result = 'Cold';
  } else if (temperature > 25) {
    result = 'Hot';
  } else {
    result = 'Warm';
  }
  res.send(result);
});

//Define a route to check the activity level based on steps
app.get('/check-activity-level', (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result;
  if (steps < 5000) {
    result = 'Activity is Low';
  } else if (steps > 10000) {
    result = 'Activity is High';
  } else {
    result = 'Activity is Moderate';
  }
  res.send(result);
});
//Define a route to check the engagement of social media post
app.get('/check-engagement', (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result;
  if (likes < 100) {
    result = 'low';
  } else if (likes > 500) {
    result = 'high';
  } else {
    result = 'medium';
  }
  res.send('Engagement Level ' + result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
