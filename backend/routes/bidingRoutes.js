const express = require("express");
const router = express.Router();
const {
  getProduct,
  setProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

router.route('/').get(getProduct).post(setProduct)
router.route('/:id').delete(deleteProduct).put(updateProduct)

//router.get("/", getProduct);
//router.post("/", setProduct);
//router.put("/:id", updateProduct);
//router.delete("/:id", deleteProduct);

module.exports = router;
