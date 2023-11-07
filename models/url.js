const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
	shortId: {
		required: true,
		type: String,
		unique: true
	},
	redirectUrl: {
		required: true,
		type: String
	},
	vistorHistory: [{ timeStamp: { type: String } }],
	timeStamp: true
});

const url = mongoose.model("url", urlSchema);

module.exports = {url}
