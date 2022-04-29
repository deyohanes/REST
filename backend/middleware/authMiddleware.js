const jwt = require("jsonwebtoken");
const asyncHAndler = require("express-async-handler");
const User = require("../model/userModel");

const protect = asyncHAndler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token from the header
      token = req.headers.authorization.split(" ")[1];

      //VERIFY TOKEN
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //GET USER FROM THE TOKEN
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      consel.log(error);
      res.status(401);
      throw new Error("NOt Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized , no token");
  }
});

module.exports = {protect};