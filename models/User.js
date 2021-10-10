const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  tokens:[
    {
      token:{
        type:String,
        require:true
      }
    }
  ]
});

userSchema.pre("save", function (next) {
    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next()
  }); 

userSchema.methods.getAuthToken = async function(data){

    let params = {
        id: this._id,
        name:this.name,
        email:this.email
    }
    let tokenValue = jwt.sign(params, process.env.SECRETKEY);
    this.tokens = this.tokens.concat({token: tokenValue})
    await this.save()
    return tokenValue

}


let User = mongoose.model("User", userSchema);

module.exports = User;
