const URL = require("../models/url");
const User = require("../models/user")

async function handleGetAllUrls(req, res) {
	const user = req.user;
	const userindb = await User.find({ email: user.email });
	const allurls = await URL.find({ createdBy: user.email });
	console.log(userindb);
	res.render("home", { urls: allurls, name: userindb[0].name });
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
