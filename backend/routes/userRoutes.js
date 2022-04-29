const express = require("express");
const router = express.Router();


const {
    getUser,
  updateUser,
  deleteUser,
  getUserById,
  register,
  login
} = require("../controllers/userController");

//router.route('/').get(getCommodity).post(setCommodity)
//router.route('/:id').delete(deleteCommodity).put(updateCommudity)
//router.route('/:id').get(getCommodityByid)
router.get("/", getUser );
router.get("/:id", getUserById);
router.post("/", login);
router.post("/register", register);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
