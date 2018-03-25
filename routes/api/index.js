const router = require("express").Router();
const videoRoutes = require("./videos");

// Article routes
router.use("/saved", videoRoutes);

module.exports = router;
