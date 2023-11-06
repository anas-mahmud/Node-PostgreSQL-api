const createUser = "INSERT INTO users (user_name, email, password, number, photo, role) VALUES ($1, $2, $3, $4, $5, $6)";
const getAllUsers = "SELECT * FROM users"

module.exports.UserService = {
   createUser,
   getAllUsers
}