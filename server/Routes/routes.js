const express = require("express");

const router = express.Router();

router.use("/recipe", require("./recipesRoutes"));

module.exports = router;