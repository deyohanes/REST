const express = require("express");
const router = express.Router();


const {
    getUser,
  setUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controllers/userController");

//router.route('/').get(getCommodity).post(setCommodity)
//router.route('/:id').delete(deleteCommodity).put(updateCommudity)
//router.route('/:id').get(getCommodityByid)
router.get("/", getUser );
router.get("/:id", getUserById);
router.post("/", setUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
