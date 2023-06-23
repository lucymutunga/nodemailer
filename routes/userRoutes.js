
const express = require("express")
const userRoutes=express.Router();
const sendMail = require("../util/sendMail");
userRoutes.post('/sendmail', (req, res) => {
    sendMail()
    res.send('email sent')
})
module.exports = {userRoutes};