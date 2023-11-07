const express = require("express");
const app = express();
const { connectToDb } = require("./connect")

connectToDb("mongodb://27017/shortid")
	.then((res) => console.log("Mongo DB Connected"))
	.catch((err) => console.log("MongoDB ERROR: ", err));
