const express = require("express");
const app = express();
const { connectToDb } = require("./connect")

connectToDb("mongodb://127.0.0.1:27017/shortid")
	.then((res) => console.log("Mongo DB Connected"))
	.catch((err) => console.log("MongoDB ERROR: ", err));

app.get("/", (req, res) => {
	res.end("HELLO")
})
app.listen(8080, () => console.log("Server Listening at PORT 8080 "))
