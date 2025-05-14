const { error } = require('console');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const {generateTokenForUser} = require('../services/authentication')

async function validatePassword(password){
    return await bcrypt.compare(password, this.password);
}

async function handleUserSignup(req,res) {
    const { name, username, email, password } = req.body;
    try {
        const emailExist = await User.findOne({ email:email });
        const usernameExist = await User.findOne({ username:username });
        if (emailExist || usernameExist) {
            return res.status(400).json({ error: "Email is already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        User.create({
            name: name,
            username: username,
            email: email,
            password: hashedPassword
        });

        // Send JSON response indicating success
        res.status(201).json({ success: true, message: "Signup successful" });

    } catch (error) {
        console.error("Signup error: ", error);
        res.status(500).json({ error: "Internal server error!" });
    }
}

async function handleUserSignin(req,res){
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username: username});
        if(!user || !user.validatePassword(password)){
            res.status(401).json({
                success: false,
                error: "Incorrect Username or Password!!"
            });
        }

        const Token = generateTokenForUser(user);

        


    } catch (error) {
        
    }
}


module.exports = {
    handleUserSignin,
    handleUserSignup,

}