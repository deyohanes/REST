const  asyncHAndler = require('express-async-handler')
const Products = require('../model/productModel')


//@desc get products
//@route get/api/goals
//@access private
const getProduct =asyncHAndler( async(req, res) => {
  const product = await Products.find()
  res.status(200).json(product);
});

//@desc setproducts
//@route POST/api/goals
//@access private
const setProduct =asyncHAndler( async(req, res) => {
  if (!req.body.productName) {
    res.status(400)
    throw new Error('pls add text')
  }
  const product = await Products.create({
    productName:req.body.text
  })
  res.status(200).json(product);
});
//@desc get products
//@route PUT/api/goals
//@access private
const updateProduct =asyncHAndler( async(req, res) => {
  res.status(200).json({ message: `update dddd ${req.params.id}` });
});
//@desc get products
//@route delete/api/goals
//@access private
const deleteProduct =asyncHAndler( async(req, res) => {
  res.status(200).json({ message: `delete dddd ${req.params.id}` });
});

module.exports = {
  getProduct,
  setProduct,
  updateProduct,
  deleteProduct,
};
