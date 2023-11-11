const jwt = require("jsonwebtoken");
const secretKey = "H@rsh7017"
const authenticateToken = (req, res, next) => {
	const token = req.cookies.accessToken;
	if (!token) return res.render("login");

	jwt.verify(token, secretKey, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
};

module.exports = authenticateToken
