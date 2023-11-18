const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
	const body = req.body;
	const user = req.user;
	if (!body.url) return res.status(400).render("home", { error: "url required!" });
	const shortId = shortid();
	if (shortId !== undefined && shortId !== 'favicon.ico') {
		await URL.create({
			shortId: shortId,
			redirectURL: body.url,
			count: 0,
			createdBy: user.email
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
