const createUser = "INSERT INTO users (user_name, email, password, number, image, role) VALUES ($1, $2, $3 $4, $5 $6)";

module.exports.UserService = {
   createUser
}