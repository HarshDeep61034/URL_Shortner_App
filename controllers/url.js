const shortid = require("shortid");
const URL = require("../models/url")
async function handleGenerateNewShortURL(req, res) {
	const body = req.body;
	if (!body.url) return res.status(400).json({ error: "url required!" });
	const shortId = shortid();
	await URL.create({
		shortId: shortId,
		redirectURL: body.url,
		visitorHistory: []
	})
	res.json({ id: shortId });


}

module.exports = { handleGenerateNewShortURL }
