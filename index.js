const express = require("express");
const app = express();
const staticRouter = require("./routes/static");
const userRouter = require("./routes/user");
const urlRouter = require("./routes/url");
const { connectToDb } = require("./connect");
const authenticateToken = require("./auth");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require("path");
require('dotenv').config();
const PORT = process.env.PORT || 8888;
const user = process.env.MONGO_DB_ADMIN;
const password = process.env.MONGO_DB_PASSWORD;

// Connecting to MongoDB via Mongoose
connectToDb(`mongodb+srv://${user}:${password}@cluster0.afbycsy.mongodb.net/`)
	.then((res) => console.log("Mongo DB Connected"))
	.catch((err) => console.log("MongoDB ERROR: ", err));

// Setting ejs as template engine to render SSR pages
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// MIDDLEWARES - with custom routers
app.use("/user", userRouter); // for user register,login,logout.
app.use("/url", authenticateToken, urlRouter); // for shortUrl creation & fetch analytics.
app.use("/", authenticateToken, staticRouter); // for Static Pages rendering & url redirection.



app.listen(PORT, () => console.log(`Server Listening at PORT: ${PORT}`));
