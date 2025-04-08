const express = require("express");

const app = express();

const unused =332;


app.get("/", (req, res) => {
  res.send("Welcome to my app!!!!!!");
});

app.get("/test", (req, res) => {
  res.send("hey this is testing api");
});

app.listen(3000, () => {
  console.log("listening on 3000");
});


// Dummy JavaScript code

// Greet the user
function greetUser(name) {
  console.log("Hello, " + name + "! Welcome to our site.");
}

// Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Generate a random number between 1 and 100
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Call the functions
greetUser("Isuru");
console.log("5 + 10 =", addNumbers(5, 10));
console.log("Random number:", getRandomNumber());
