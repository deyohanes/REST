const mongoose = require("mongoose");
const producerSchema = new mongoose.Schema(
  {
    producerName: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    address: {
      email: {
        type: String,
        required: true,
      },
      phonenumber: {
        type: Number,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    rating: {
      type: double,
    },
    activity: {
      produced: {
        type: double,
      },
    },
  },
  {
    timestamps: true,
  }
);
const producer = new mongoose.model("producer", producerSchema);
module.exports = producer;
