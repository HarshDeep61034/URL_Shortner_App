const express = require("express");
const app = express();
const { connectToDb } = require("./connect");
const Router = require("./routes/url");
const URL = require("./models/url");
const shortid = require("shortid");
connectToDb("mongodb://localhost:27017/shortid")
	.then((res) => console.log("Mongo DB Connected"))
	.catch((err) => console.log("MongoDB ERROR: ", err));
app.use(express.json());
app.use("/url", Router);
app.get("/shorty/:id", (req, res) => {
	const id = req.params.id;
	const item = URL.findOne({ shortId: id });
	console.log(item);
})
app.listen(8080, () => console.log("Server Listening at PORT 8080 "))
