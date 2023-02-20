const asyncHandler = require("express-async-handler");
const Goal = require("../models/goals");

const createGoal = asyncHandler(async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400);
      throw new Error("plaease add in a text");
    }

    const goal = new Goal({ text });
    await goal.save();
    res.status(201).json({ goal });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getGoals = asyncHandler(async (req, res) => {
  try {
    const goals = await Goal.find({});
    res.status(201).json({ goals });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const getGoal = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const goal = await Goal.findById(id);
    if (!goal) {
      res.status(404);
      throw new Error("Goal not found!!!");
    }

    res.status(201).json({ goal });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const updateGoal = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const goal = await Goal.findById(id);
    if (!goal) {
      res.status(404);
      throw new Error("Goal not found!!!");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    );
    res.status(201).json({ updatedGoal });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const deleteGoal = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const goal = await Goal.findById(id);
    if (!goal) {
      res.status(404);
      throw new Error("Goal not found!!!");
    }

    await goal.remove();
    res.status(201).json({
      success: true,
      message: "deleted successfully!!!",
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

module.exports = {
  createGoal,
  getGoals,
  getGoal,
  updateGoal,
  deleteGoal,
};
