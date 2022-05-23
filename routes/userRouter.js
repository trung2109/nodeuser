const express = require("express");
const route = express.Router();
const multer = require("multer");
const upload = multer();
const userController = require("../controllers/userController");
route.get("/register", (req, res) => {
    res.render("register");
});
route.post("/register", upload.none(), userController.userRegister);
route.get("/login", (req, res) => {
    res.render("login");
});
module.exports = route;

 