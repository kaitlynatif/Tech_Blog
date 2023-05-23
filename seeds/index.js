// Import the seed data functions
const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");

// Import the sequelize connection from ../config/connection
const sequelize = require("../config/connection");

// Function to seed all data by calling the three seed functions in sequence
const seedAll = async () => {
  // Synch the sequelize models and wipe out the tables
  await sequelize.sync({ force: true });
  // Call each of the seed data functions
  await seedUsers();
  await seedPosts();
  await seedComments();
  // Exit the process with a successful exit code
  process.exit(0);
};

// Call the seedAll function to seed the database
seedAll();
