// Import model function
const {User} = require('../model/User');

//get user detail function
async function getUserDetail(req) {
    return User.findById(req.params.id);
}

//create user function
async function createUser(req) {
    const user = new User(req.body);
    return  user.save()
}

//create user function
async function loginUser(req) {
    
    const {email,password} = req.body;

    return User.login(email,password);

}



module.exports = {
    getUserDetail,
    createUser,
    loginUser
}