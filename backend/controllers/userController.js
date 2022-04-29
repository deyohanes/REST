const asyncHAndler = require("express-async-handler");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//--------------------------------------------------------------------------------------------------------------------------------------//
//@desc get commodities
//@route get/api/commodity
//@access public
const getUser = asyncHAndler(async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
});

const login = asyncHAndler(async (req, res) => { 
  const {username ,password} = req.body
  const user = await User.findOne({username});
  //chech if userIS in the system
  if(user && (await bcrypt.compare(password, user.password))){
    res.json({
      _id: user.id,
      fname: user.firstName,
      lname: user.lastName,
      email: user.email,
      phoneno: user.phonenumber,
      address: user.address,
      username: user.username,
      token : generateToken(user.id)

    })
  }else{
    res.status(400)
    throw new Error('Invalid Credential')
  }
  
});
//--------------------------------------------------------------------------------------------------------------------------------------//
//@desc get commodities by id
//@route get/api/commodity
//@access private
const getUserById = asyncHAndler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//--------------------------------------------------------------------------------------------------------------------------------------//

//@desc register new user
//@route POST/api/commodity
//@access public
const register = asyncHAndler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phonenumber,
    address,
    username,
    password,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phonenumber ||
    !address ||
    !username ||
    !password
  ) {
    res.status(400);
    throw new Error("please add fields");
  }
  //check if user exist
  const UserExist = await User.findOne({ email });
  if (UserExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }
  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);
  /*
  //create user

  const user = await User.create({
    firstName,
    lastName,
    email,
    phonenumber,
    address,
    username,
    password: hashedpassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      fname: user.firstName,
      lname: user.lastName,
      email: user.email,
      phoneno: user.phoneno,
      address: user.address,
      username: user.username,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});
*/

//const register = asyncHAndler(async (req, res) => {
  const user = new User({
    firstName,
    lastName,
    email,
    phonenumber,
    address,
    username,
    password:  hashedpassword,
  });
  try {
    const dataToSave = await user.save();
    res.status(200).json({
      _id: user.id,
      fname: user.firstName,
      lname: user.lastName,
      email: user.email,
      phoneno: user.phonenumber,
      address: user.address,
      username: user.username,
      token : generateToken(user.id)
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


//if (!req.body.productName || !req.body.symbol  || !req.body.grade  || !req.body.market ) {
//res.status(400);
//throw new Error("pls add text");}
//const commodity = await Commodity.create({
//productName: req.body.productName,
//symbol: req.body.symbol,
//grade: req.body.grade,
//market: req.body.market,

//});
//res.status(200).json(commodity);

//--------------------------------------------------------------------------------------------------------------------------------------//
//@desc put Commodities
//@route PUT/api/commodity
//@access private
const updateUser = asyncHAndler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("Commodity Not Found");
  }
  const updateProduct = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateProduct);
});
//--------------------------------------------------------------------------------------------------------------------------------------//
//@desc delete commodities
//@route delete/api/commodity
//@access private
const deleteUser = asyncHAndler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("Product Not Found");
  }
  await User.deleteOne();
  res.status(200).json({ id: req.params.id });
});

//generate JWT 
const generateToken =(id)=>{
  return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:'30d',
  })
}



module.exports = {
  getUser,
  updateUser,
  deleteUser,
  getUserById,
  register,
  login,
};
