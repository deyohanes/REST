const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    
      commodityId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "commodities",
      },
      commodityName: {
        type: String,
        required: true,
      },
      symbol: {
        type: String,
        required: true,
      },
      Grade: {
        type: String,
      },
    
    producerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    producedDate: {
      type: String,
      required: true,
    },
    productAvailability: {
      type: [String],
    },
    
      warehouseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "warehouses",
      },
      warehouseSymbol: {
        type: String,
        required: true,
      },
      rack: {
        type: String,
        required: true,
      },
      block: {
        type: String,
        required: true,
      },
      size: {
        type: Number,
        
        required: true,
      },
    },
  
  {
    timeseries: true,
  }
);

const Products = mongoose.model("products", productSchema);
module.exports = Products;
