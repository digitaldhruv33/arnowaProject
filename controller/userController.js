const User = require("../models/User.js");
const validateUser = require('../validation/userValidation.js')


const userList = async(req, res)=>{
    try{
        let data = await User.find()
    res.json(data)
    }catch(error){
        res.json(error)
    }
}

const userRegister = async (req, res) => {
  try {
    const { error } = await validateUser(req.body);
    if (error) {
      return res.status(400).json(error.details[0].message);
    } else {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const savedUser = await user.save();
      let myToken = await user.getAuthToken()
      res.status(200).json({token:myToken});
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {userRegister, userList}