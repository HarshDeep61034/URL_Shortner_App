const User = require("../models/user");
const secretKey = "H@rsh7017";
const jwt = require("jsonwebtoken");

async function handleCreateNewUser(req, res) {
	const { name, email, password } = req.body;
	await User.create({ name, email, password });
	res.render("home", { name: name });
}

async function handleLoginUser(req, res) {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) return res.status(400).render("login", { error: "Invalid Credentials or User doesn't exists!" });
	if (user.password == password) {
		const accessToken = jwt.sign(user, secretKey);
		res.cookie('accessToken', accessToken, { httpOnly: true });
		res.render("home", { name: user.name });
	}
	else {
		return res.status(400).render("login", { error: "Invalid Password" });
	}
}

module.exports = { handleCreateNewUser, handleLoginUser }
