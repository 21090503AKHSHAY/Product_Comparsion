const User = require("../models/user");

const getUsers = async (req, res) => {
  // Fetch all users from the database

  try {
    const users = await User.find();
    res.json(users); // Return the list of users

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUsers };
