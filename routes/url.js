const express = require('express');
const router = express.Router();
const { handleGenerateNewShortURL, handleAnalytics } = require("../controllers/url")

router.post("/", handleGenerateNewShortURL); // Generates shortId and attach url posted on this endpoint with shortId.
router.get("/analytics/:id", handleAnalytics); // Fetch analytics about shortId passed as param.

module.exports = router
