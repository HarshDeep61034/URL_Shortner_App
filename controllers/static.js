const URL = require("../models/url");
const User = require("../models/user")

async function handleGetAllUrls(req, res) {
	const email = req.user.email;
	const userindb = await User.findOne({ email });
	const allurls = await URL.find({});
	res.render("home", { urls: allurls, name: userindb.name });
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
