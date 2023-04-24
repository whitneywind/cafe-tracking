import express from "express";

const router = express.Router();

import {
  createCafe,
  getAllCafes,
  updateCafe,
  deleteCafe,
  showStats,
  deleteAll,
} from "../controllers/cafeController.js";

router.route("/").post(createCafe).get(getAllCafes);
router.route("/deleteAll").delete(deleteAll);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteCafe).patch(updateCafe);

export default router;
