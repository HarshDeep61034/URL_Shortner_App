const express = require('express');
const router = express.Router();
const { handleGetAllUrls, handleRedirection } = require("../controllers/static")

router.get("/", handleGetAllUrls);
router.get("/:id", handleRedirection);

module.exports = router
