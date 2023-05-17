// Import Post model from ../models directory
const { User } = require("../models");

// Array of dummy blog post data
const userData = [
  {
    username: "user1",
    email: "user1@example.com",
    password: "password1",
  },
  {
    username: "user2",
    email: "user2@example.com",
    password: "password2",
  },
  {
    username: "user3",
    email: "user3@example.com",
    password: "password3",
  },
  {
    username: "user4",
    email: "user4@example.com",
    password: "password4",
  },
  {
    username: "user5",
    email: "user5@example.com",
    password: "password5",
  },

];

// Function to seed posts table with dummy data using bulkCreate method
const seedUsers = () => User.bulkCreate(userData);

// Export seedPosts function for use in other files
module.exports = seedUsers;
