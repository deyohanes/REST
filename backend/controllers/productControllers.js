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

  const product = await Products.findById(req.params.id)
  if(!product){
    res.status(400)
    throw new Error('Product Not Found') 
  }
  const updateProduct = await Products.findByIdAndUpdate(req.params.id,req.body,{
    new : true
  })
  res.status(200).json(updateProduct);
});
//@desc get products
//@route delete/api/goals
//@access private
const deleteProduct =asyncHAndler( async(req, res) => {
  const product = await Products.findById(req.params.id)
  if(!product){
    res.status(400)
    throw new Error('Product Not Found') 
  }
  await products.remove()
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProduct,
  setProduct,
  updateProduct,
  deleteProduct,
};
