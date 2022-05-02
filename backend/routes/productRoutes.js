const express = require("express");
const router = express.Router();
const {protect} =require("../middleware/authMiddleware")

const {
  getProduct,
  addproduct,
  updateProduct,
  deleteProduct,
  getAllProduct
} = require("../controllers/productControllers");

router.route('/').get(getProduct).post(protect,addproduct)
router.route('/:id').delete(deleteProduct).put(updateProduct)

router.get("/all", getAllProduct);
//router.post("/", setProduct);
//router.put("/:id", updateProduct);
//router.delete("/:id", deleteProduct);

module.exports = router;
