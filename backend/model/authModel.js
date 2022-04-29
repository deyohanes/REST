const mongoose = require("mongoose");
const validator = require("validator");
const loginSchema = mongoose.Schema({
  username: {
    type :String,
    required: true,
  },
  password:{
    type :String,
    required: true,
  } ,
  email: {
    type :String,
    required : true
  },
},{
  timeStamp : true,
});
const login = mongoose.model("login", loginSchema);
module.exports = login;
