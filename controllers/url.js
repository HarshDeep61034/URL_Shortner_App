const shortid = require("shortid");
const URL = require("../models/url");
const jwt = require("jsonwebtoken");
const secretKey = "H@rsh7017";

async function handleGenerateNewShortURL(req, res) {
	const token = req.cookies.accessToken;
	await jwt.verify(token, secretKey, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
	});

	const body = req.body;
	if (!body.url) return res.status(400).json({ error: "url required!" });
	const shortId = shortid();
	if (shortId !== undefined && shortId !== 'favicon.ico') {
		await URL.create({
			shortId: shortId,
			redirectURL: body.url,
			count: 0,
			createdBy: req.user.email
		})
	}

	res.render("home", { id: shortId, info: true });
}

async function handleAnalytics(req, res) {
	const shortId = req.params.id;
	const result = await URL.findOne({ shortId });
	return res.json({ totalClicks: result.count });
}

module.exports = { handleGenerateNewShortURL, handleAnalytics }
