const User = require("../models/user");
const secretKey = "H@rsh7017";
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
		const accessToken = jwt.sign({ email, password }, secretKey);
		res.cookie('accessToken', accessToken, { httpOnly: true });
		res.redirect("http://localhost:8080/");
	}
	else {
		return res.status(400).render("login", { error: "Invalid Password" });
	}
}

module.exports = { handleCreateNewUser, handleLoginUser }