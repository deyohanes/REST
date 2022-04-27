const mongoose = require("mongoose");

const commoditySchema = mongoose.Schema({
  commoditieName: String,
  symbol: [String],
  grade: [String],
  market: {
    type: [String],
    defaut: ["Local", "Export"],
  }
},{
  timeStamp : true,
});
const Commodity = mongoose.model("commodities", commoditySchema);
module.exports = Commodity;
