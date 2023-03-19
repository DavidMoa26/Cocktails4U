const express = require("express");
const { registerNewUser, login, validateMail, getUsers } = require('../controllers/userControllers')
const { User } = require("../models/user");

const router = express.Router();

router.post("/register", registerNewUser);
router.get("/register/:_id/validate/:token", validateMail);
router.post("/login", login);
router.get("/", getUsers);

module.exports = router;