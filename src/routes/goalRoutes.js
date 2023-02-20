const express = require("express");
const {
  getGoals,
  createGoal,
  getGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalCtrl");
const { protect } = require("../middlewares/authHandler");
const router = express.Router();

router.use(protect);

router.route("/").post(createGoal).get(getGoals);

router.route("/:id").get(getGoal).put(updateGoal).delete(deleteGoal);

module.exports = router;
