const express = require("express");
const router = express.Router();
const {protect} =require("../middleware/authMiddleware")

const {
  getProduct,
  addproduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

router.route('/').get(protect,getProduct).post(protect,addproduct)
router.route('/:id').delete(deleteProduct).put(updateProduct)

//router.get("/", getProduct);
//router.post("/", setProduct);
//router.put("/:id", updateProduct);
//router.delete("/:id", deleteProduct);

module.exports = router;
