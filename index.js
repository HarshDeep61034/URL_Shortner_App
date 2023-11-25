const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.end("<h1>Server Working!!</h1>")
})

app.listen(8888, (err) => console.log("Listening Server"));
