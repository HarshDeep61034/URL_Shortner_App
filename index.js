const express = require("express");
const app = express();
const { connectToDb } = require("./connect");
const Router = require("./routes/url");
const URL = require("./models/url");
const mongoose = require('mongoose')
const shortid = require("shortid");

app.set("view engine", "ejs");
connectToDb("mongodb://localhost:27017/shortid")
	.then((res) => console.log("Mongo DB Connected"))
	.catch((err) => console.log("MongoDB ERROR: ", err));

// MIDDLEWARES
app.use(express.json());
app.use("/url", Router);

// REDIRECTION ON DYNAMIC ID ENDPOINT
app.get("/:id", async (req, res) => {
	const shortId = req.params.id;
	const result = await URL.findOneAndUpdate(
		{ shortId },
		{ $inc: { count: 1 } },
		{ upsert: true, new: true }
	);
	console.log(result);
	res.redirect(result.redirectURL);
})


app.listen(8080, () => console.log("Server Listening at PORT 8080 "))
