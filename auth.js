const jwt = require("jsonwebtoken");
require('dotenv').config();
const secretKey = process.env.JWT_SECRET_KEY;

const authenticateToken = (req, res, next) => {
	const token = req.cookies.accessToken;

	if (!token) return res.redirect("/user/login");

	jwt.verify(token, secretKey, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
};

module.exports = authenticateToken
