const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.end("<h1>Server Working!!</h1>")
})

app.listen(2000, (err) => console.log("Listening Server"));
