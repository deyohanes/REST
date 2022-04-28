const asyncHAndler = require("express-async-handler");
const User = require("../model/userModel");

//--------------------------------------------------------------------------------------------------------------------------------------//
//@desc get commodities
//@route get/api/commodity
//@access private
const getUser = asyncHAndler(async (req, res) => {
    const user = await User.find();
    res.status(200).json(user);
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

//@desc setCommodities
//@route POST/api/commodity
//@access private
const setUser = asyncHAndler(async (req, res) => {
  const user = new User({
    warehouseSymbol: req.body.warehouseSymbol,
    block: req.body.block,
    rack: req.body.rack,
    size: req.body.size,
  });
  try {
    const dataToSave = await user.save();
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
const updateUser = asyncHAndler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("Commodity Not Found");
  }
  const updateProduct = await User.findByIdAndUpdate(
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
const deleteUser = asyncHAndler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("Product Not Found");
  }
  await User.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getUser,
  setUser,
  updateUser,
  deleteUser,
  getUserById,
};
