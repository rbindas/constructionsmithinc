const router = require("express").Router();
const commentRoutes = require("./comments");
const videoRoutes = require("./videos");
const userRoutes = require("./userRoutes");



// routes
router.use("/comment", commentRoutes);
router.use("/saved", videoRoutes);
router.use("/", userRoutes);

module.exports = router;
