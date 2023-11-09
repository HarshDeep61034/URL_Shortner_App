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
	vistorHistory: [{ timeStamp: { type: Number } }],
},
	{ timeStamps: true }
);

const url = mongoose.model("url", urlSchema);

module.exports = url
