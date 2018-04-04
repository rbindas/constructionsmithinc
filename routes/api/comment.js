const router = require("express").Router();
const commentController = require("../../controllers/commentController");

// Matches with "/api/saved"
router.route("/")
  .get(commentController.findAll)
  .post(commentController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .put(commentController.update)
  .delete(commentController.remove);

module.exports = router;