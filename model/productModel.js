const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productSymbol: {
    type: String,
  },
  productId: {
    type: String,
    required: true,
  },
  producedDate: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  typeOfProduct: {
    type: String,
  },
},{
    timeseries: true,
});

const Products = mongoose.model("products", productSchema);
module.exports = Products;
