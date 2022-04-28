const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  Name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  address:{
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

  role: {
    type: [String],
    required: true,
    defaut: ["buyer", "producer"],
  },
 
},{
    timestamps: true,
});
const users = new mongoose.model("user", userSchema);
module.exports = users;
