const router = require('express').Router()
const { userRegister, userList } = require('../controller/userController.js')
const User = require('../models/User.js')
const validateUser = require('../validation/userValidation.js')


router.post('/register', userRegister)
router.get('/userlist', userList)

module.exports = router