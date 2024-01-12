const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userContoller");

//router object
const router = express.Router();

// GET ALL USERS || GET
router.get(
  "https://master--comforting-praline-757aaa.netlify.app/all-users",
  getAllUsers
);

// CREATE USER || POST
router.post(
  "https://master--comforting-praline-757aaa.netlify.app/register",
  registerController
);

//LOGIN || POST
router.post(
  "https://master--comforting-praline-757aaa.netlify.app/login",
  loginController
);

module.exports = router;
