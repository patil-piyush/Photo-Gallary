const express = require('express')
const {verifyToken} = require('../middlewares/auth')
const {handleUserDashboard} = require('../controllers/user')


const router = express.Router();


router.get('/dashboard', verifyToken, handleUserDashboard);


module.exports = router