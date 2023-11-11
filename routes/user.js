const express = require('express');
const router = express.Router();
const { handleCreateNewUser, handleLoginUser } = require("../controllers/user")

router.get("/login", (req, res) => {
	res.render("login");
});
router.get("/register", (req, res) => {
	res.render("register");
})
router.post("/register", handleCreateNewUser);
router.post("/login", handleLoginUser);

module.exports = router
