const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref : 'commodities'
  },
  productSymbol: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref : 'commodities'
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref : 'commodities'
  },
  producerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref : 'user'
  },
  producedDate: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  productAvailability: {
    type: [String],
  },
},{
    timeseries: true,
});

const Products = mongoose.model("products", productSchema);
module.exports = Products;
