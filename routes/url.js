const express = require('express');
const router = express.Router();
const { handleGenerateNewShortURL, handleAnalytics } = require("../controllers/url")

router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:id", handleAnalytics);

module.exports = router
