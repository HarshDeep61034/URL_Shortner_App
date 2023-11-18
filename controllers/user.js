const User = require("../models/user");
require('dotenv').config();
const secretKey = process.env.JWT_SECRET_KEY;
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

async function handleCreateNewUser(req, res) {
	const { name, email, password } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);
	await User.create({ name, email, password: hashedPassword });
	const accessToken = jwt.sign({ name, email }, secretKey);
	res.cookie('accessToken', accessToken, { httpOnly: true });
	res.redirect("http://localhost:8080/");
}

async function handleLoginUser(req, res) {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) return res.status(400).render("login", { error: "User doesn't exists!" });
	const passwordMatch = await bcrypt.compare(password, user.password);
	if (passwordMatch) {
		const accessToken = jwt.sign({ name: user.name, email }, secretKey);
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
