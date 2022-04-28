const express = require("express");
const router = express.Router();
const Warehouse = require("../model/warehouseModel");


const {
    getWarehouse,
  setWarehouse,
  updateWarehouse,
  deleteWarehouse,
  getWarehouseById,
} = require("../controllers/warehouseController");

//router.route('/').get(getCommodity).post(setCommodity)
//router.route('/:id').delete(deleteCommodity).put(updateCommudity)
//router.route('/:id').get(getCommodityByid)
router.get("/", getWarehouse );
router.get("/:id", getWarehouseById);
router.post("/", setWarehouse);
router.put("/:id", updateWarehouse);
router.delete("/:id", deleteWarehouse);

module.exports = router;
