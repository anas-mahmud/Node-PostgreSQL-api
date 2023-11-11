const checkEmailExist = "SELECT s FROM users WHERE s.email = $1";
const createUser = "INSERT INTO users (user_name, email, password, number, photo, role) VALUES ($1, $2, $3, $4, $5, $6)";
const getAllUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE user_id = $1";
const deleteUserById = "DELETE FROM users WHERE user_id = $1";

module.exports.UserService = {
   checkEmailExist,
   createUser,
   getAllUsers,
   getUserById, 
   deleteUserById
}