const asyncHAndler = require("express-async-handler");
const Products = require("../model/productModel");

//@desc get products
//@route get/api/goals
//@access private
const getProduct = asyncHAndler(async (req, res) => {
  const product = await Products.find({user : req.user.id});
  res.status(200).json(product);
});
const getAllProduct = asyncHAndler(async (req, res) => {
  const product = await Products.find();
  res.status(200).json(product);
});

//@desc setproducts
//@route POST/api/goals
//@access private
const addproduct = asyncHAndler(async (req, res) => {
  const {
    commodityId,
    commodityName,
    symbol,
    Grade,
    producerId,
    producedDate,
    productAvailability,
    warehouseId,
    warehouseSymbol,
    rack,
    block,
    size,
  } = req.body;

  if (
    !commodityId ||
    !commodityName ||
    !symbol ||
    !producerId ||
    !producedDate ||
    !productAvailability ||
    !warehouseId ||
    !warehouseSymbol ||
    !rack ||
    !block ||
    !size
  ) {
    res.status(400);
    throw new Error("please add fields");
  }
  /*
  //check if Product exist
  const productExist = await Products.findOne({ _id});
  if (productExist) {
    res.status(400);
    throw new Error("Product Already Exist");
  }
   */

  //const register = asyncHAndler(async (req, res) => {
  const product = new Products({
    commodityId: req.body.commodityId,
    commodityName: req.body.commodityName,
    symbol: req.body.symbol,
    Grade: req.body.Grade,
    producerId: req.body.producerId,
    producedDate: req.body.producedDate,
    productAvailability: req.body.productAvailability,
    warehouseId: req.body.warehouseId,
    warehouseSymbol: req.body.warehouseSymbol,
    rack: req.body.rack,
    block: req.body.block,
    size: req.body.size,
  });
  try {
    const dataToSave = await product.save();
    res.status(200).json({
      commodityId: product.commodityId,
      commodityName: product.commodityName,
      symbol: product.symbol,
      Grade: product.Grade,
      producerId: product.producerId,
      producedDate: product.producedDate,
      productAvailability: product.productAvailability,
      warehouseId: product.warehouseId,
      warehouseSymbol: product.warehouseSymbol,
      rack: product.rack,
      block: product.block,
      size: product.size,
    });
  } catch (error) {
    res.status(400).json({ message: smy });
  }
});

//@desc get products
//@route PUT/api/goals
//@access private
const updateProduct = asyncHAndler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product Not Found");
  }
  const updateProduct = await Products.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateProduct);
});
//@desc get products
//@route delete/api/goals
//@access private
const deleteProduct = asyncHAndler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product Not Found");
  }
  await Products.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProduct,
  addproduct,
  updateProduct,
  deleteProduct,
  getAllProduct
};
