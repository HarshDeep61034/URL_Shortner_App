const express = require('express');
const router = express.Router();
const { handleGetAllUrls, handleRedirection } = require("../controllers/static");

router.get("/", handleGetAllUrls); // Renders homepage with all urls user have created.
router.get("/:id", handleRedirection); // http://localhost:8080/ab352_s0 redirects to the url assigned with shortId (ab352_s0)

module.exports = router
