const checkEmailExist = "SELECT email FROM users s WHERE s.email = $1";

const createUser =
  "INSERT INTO users (user_name, email, password, number, photo, role) VALUES ($1, $2, $3, $4, $5, $6)";

const getAllUsers = "SELECT * FROM users";

const getUserById = "SELECT * FROM users WHERE user_id = $1";

const updateUserById = "UPDATE users SET password = $1 WHERE user_id = $2";

const deleteUserById = "DELETE FROM users WHERE user_id = $1";

module.exports.UserService = {
  checkEmailExist,
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
