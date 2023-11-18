const URL = require("../models/url");

async function handleGetAllUrls(req, res) {
	const user = req.user;
	const allurls = await URL.find({ createdBy: user.email });
	res.render("home", { urls: allurls, name: user.name });
}

async function handleRedirection(req, res) {
	const shortId = req.params.id;
	const result = await URL.findOneAndUpdate(
		{ shortId },
		{ $inc: { count: 1 } },
		{ upsert: true, new: true }
	);
	res.redirect(result.redirectURL);
}
module.exports = { handleRedirection, handleGetAllUrls }
