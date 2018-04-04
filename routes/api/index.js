const router = require("express").Router();
const commentRoutes = require("./comments");
const videoRoutes = require("./videos");



// Article routes
router.use("/comment", commentRoutes);
router.use("/saved", videoRoutes);


module.exports = router;
