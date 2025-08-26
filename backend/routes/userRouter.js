const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  updateProfile,
  deleteResume,
  getPublicProfile,
} = require("../controllers/userController");

const router = express.Router();

router.put("/profile", protect, updateProfile);
router.post("/resume", protect, deleteResume);

router.get("/:id", getPublicProfile);

module.exports = router;
