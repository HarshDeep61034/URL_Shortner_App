const User = require("../models/user");
require('dotenv').config();
const secretKey = process.env.JWT_SECRET_KEY;
const jwt = require("jsonwebtoken");

async function handleCreateNewUser(req, res) {
	const { name, email, password } = req.body;
	await User.create({ name, email, password });
	res.redirect("http://localhost:8080/");
}

async function handleLoginUser(req, res) {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) return res.status(400).render("login", { error: "Invalid Credentials or User doesn't exists!" });
	if (user.password == password) {
		const accessToken = jwt.sign({ name: user.name, email, password }, secretKey);
		res.cookie('accessToken', accessToken, { httpOnly: true });
		res.redirect("http://localhost:8080/");
	}
	else {
		return res.status(400).render("login", { error: "Invalid Password" });
	}
}

function handleLogutUser(req, res) {
	res.cookie('accessToken', null, { httpOnly: true, expires: new Date(Date.now()), });
	res.redirect('http://localhost:8080/user/login');
}

module.exports = { handleCreateNewUser, handleLoginUser, handleLogutUser }
