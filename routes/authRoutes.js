const express = require("express");
const router = express.Router();
const {
    getLogin,
    setLogin,
    updateLogin,
    deleteLogin,
    getLoginByid,
} = require("../controllers/productControllers");

//router.route('/').get(getLogin).post(setLogin)
//router.route('/:id').delete(deleteProduct).put(updateProduct)

router.get("/", getLogin);
router.post("/", setLogin);
router.put("/:id", updateLogin);
router.delete("/:id", deleteLogin);
router.get("/:id", getLoginByid);

module.exports = router;
