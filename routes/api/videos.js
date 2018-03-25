const router = require("express").Router();
const videosController = require("../../controllers/videosController");

// Matches with "/api/saved"
router.route("/")
  .get(videosController.findAll)
  .post(videosController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .delete(videosController.remove);

module.exports = router;
