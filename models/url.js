const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
	shortId: {
		required: true,
		type: String,
		unique: true,
	},
	redirectURL: {
		required: true,
		type: String,
	},
	count: { type: Number, default: 0 },
	createdBy: {
		type: String,
		required: true
	}
}
);

const url = mongoose.model("url", urlSchema);

module.exports = url
