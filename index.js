const express = require("express");
const app = express();
const { connectToDb } = require("./connect");
const urlRouter = require("./routes/url");
const staticRouter = require("./routes/static");
const userRouter = require("./routes/user");
const bodyParser = require('body-parser');
const path = require("path");
const authenticateToken = require("./auth");
const cookieParser = require('cookie-parser');

connectToDb("mongodb://localhost:27017/shortid")
	.then((res) => console.log("Mongo DB Connected"))
	.catch((err) => console.log("MongoDB ERROR: ", err));


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter);
app.use("/url", authenticateToken, urlRouter);
app.use("/", authenticateToken, staticRouter);



app.listen(8080, () => console.log("Server Listening at PORT 8080 "));
