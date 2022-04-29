const asyncHAndler = require("express-async-handler");
const Login = require("../model/authModel");

//--------------------------------------------------------------------------------------------------------------------------------------//
//@desc get commodities
//@route get/api/commodity
//@access private
const getLogin = asyncHAndler(async (req, res) => {
  const login = await Login.find();
  res.status(200).json(login);
});
//--------------------------------------------------------------------------------------------------------------------------------------//
//@desc get commodities by id
//@route get/api/commodity
//@access private
const getLoginByid = asyncHAndler(async (req, res) => {
  try {
    const login = await Login.findById(req.params.id);
    res.json(login);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//--------------------------------------------------------------------------------------------------------------------------------------//

//@desc setCommodities
//@route POST/api/commodity
//@access private
const setLogin = asyncHAndler(async (req, res) => {
  const login = new Login({
    userId: req.body.userId,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  try {
    const dataToSave = await login.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

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
});
//--------------------------------------------------------------------------------------------------------------------------------------//
//@desc put Commodities
//@route PUT/api/commodity
//@access private
const updateLogin = asyncHAndler(async (req, res) => {
  const login = await Login.findById(req.params.id);
  if (!login) {
    res.status(400);
    throw new Error("Commodity Not Found");
  }
  const updateProduct = await Login.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateProduct);
});
//--------------------------------------------------------------------------------------------------------------------------------------//
//@desc delete commodities
//@route delete/api/commodity
//@access private
const deleteLogin = asyncHAndler(async (req, res) => {
  const login = await Login.findById(req.params.id);
  if (!login) {
    res.status(400);
    throw new Error("Product Not Found");
  }
  await Login.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getLogin,
  setLogin,
  updateLogin,
  deleteLogin,
  getLoginByid,
};
