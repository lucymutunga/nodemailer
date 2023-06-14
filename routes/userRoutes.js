const express = require('express');
const{
    home,
    getUsers,
    getUser,
    createUser,
    updateUser,
    sign_up,
    login,

    deleteUser
} = require('../controllers/userController');

const router = express.Router();

//defining routes for the users
router.get("/", home);
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.post("/sign_up", sign_up);
router.post("/login", login);

//exporting the router
module.exports = {router};