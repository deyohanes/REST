const express = require("express");
const router = express.Router();


const {
    getCommodity,
    setCommodity,
    updateCommudity,
    deleteCommodity,
    getCommodityByid,
} = require("../controllers/commudityController");

//router.route('/').get(getCommodity).post(setCommodity)
//router.route('/:id').delete(deleteCommodity).put(updateCommudity)
//router.route('/:id').get(getCommodityByid)
router.get("/", getCommodity);
router.get("/:id", getCommodityByid);
router.post("/", setCommodity);
router.put("/:id", updateCommudity);
router.delete("/:id", deleteCommodity);

module.exports = router;
