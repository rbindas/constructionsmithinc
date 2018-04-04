const router = require("express").Router();
const commentRoutes = require("./comments");
const videoRoutes = require("./videos");
const userRoutes = require("./userRoutes");
const commentRoutes = require('./comment');



// Article routes
router.use("/comment", commentRoutes);
router.use("/saved", videoRoutes);
router.use("/", userRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
