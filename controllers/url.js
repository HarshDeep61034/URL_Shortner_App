const shortid = require("shortid");
const URL = require("../models/url")
async function handleGenerateNewShortURL(req, res) {
	const body = req.body;
	if (!body.url) return res.status(400).json({ error: "url required!" });
	const shortId = shortid();
	await URL.create({
		shortId: shortId,
		redirectURL: body.url,
		count: 0
	})
	res.render("home", { id: shortId });
}

async function handleAnalytics(req, res) {
	const shortId = req.params.id;
	const result = await URL.findOne({ shortId });
	return res.json({ totalClicks: result.count });
}

module.exports = { handleGenerateNewShortURL, handleAnalytics }
