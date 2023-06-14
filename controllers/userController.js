const users  = require('../data');
module.exports ={
    home: (req, res) => {
        res.send("Welcome to the home page");
    },
    getUsers: (req, res) => {
        res.json({
            message: "List of all users",
            success: true,
            results: users

            
        })

    },
    getUser: (req, res) => {
        const user = users.find((user) => user.id === +req.params.id);
        if(!user){
            res.json({
                message: "User not found",
                success: false
            })
        }
        res.json({
            message: "User found",
            success: true,
            results: user
        })
    },
    createUser: (req, res) => {
        const {name, email, role} = req.body;
        const id = users[users.length - 1].id + 1;
        const newUser = {
            id,
            name,
            email,
            role
        };
        users.push(newUser);
        res.json({
            message: "User created",
            success: true,
            results: newUser
        })
    },
    updateUser: (req, res) => {
        const {name, email, role} = req.body;
        const user = users.find((user) => user.id === +req.params.id);
        if(!user){
            res.json({
                message: "User not found",
                success: false
            })
        }
        user.name = name;
        user.email = email;
        user.role = role;
        res.json({
            message: "User updated",
            success: true,
            results: user
        })
    },
    deleteUser: (req, res) => {
        const user = users.find((user) => user.id === +req.params.id);
        if(!user){
            res.json({
                message: "User not found",
                success: false
            })
        }
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.json({
            message: "User deleted",
            success: true,
            results: users
        })
    },
    sign_up: (req, res) => {
        const {name, email, password} = req.body;
        const id = users[users.length - 1].id + 1;
        const newUser = {
            id,
            name,
            email,
            password
        };
        users.push(newUser);
        res.json({
            message: "User created",
            success: true,
            results: newUser
        })
    },
    login: (req, res) => {
        const {email, password} = req.body;
        const user = users.find((user) => user.email === email && user.password === password);
        if(!user){
            res.json({
                message: "User not found",
                success: false
            })
        }
        res.json({
            message: "User logged in",
            success: true,
            results: user
        })
    }
};