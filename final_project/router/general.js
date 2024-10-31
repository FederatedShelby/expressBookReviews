const express = require("express");
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

const isRegisteredUser = (username) => {
  return !!users.find((user) => user.username === username);
};

// Register new user
public_users.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!isRegisteredUser) {
      users.push({
        username,
        password,
      });
      return res
        .status(200)
        .json({ message: "User successfully registered. Now you can login" });
    } else {
      return res
        .status(404)
        .json({ message: "This username is already taken" });
    }
  }
  return res.status(404).json({ message: "Error: unable to register user" });
});

// Get the book list available in the shop
public_users.get("/", function (req, res) {
  if (!!books) {
    return res.status(200).json(books);
  }
  return res.status(404).json({ message: "Error: unable to register user" });
});

// Get book details based on ISBN
public_users.get("/isbn/:isbn", function (req, res) {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get book details based on author
public_users.get("/author/:author", function (req, res) {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get all books based on title
public_users.get("/title/:title", function (req, res) {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

//  Get book review
public_users.get("/review/:isbn", function (req, res) {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

module.exports.general = public_users;
