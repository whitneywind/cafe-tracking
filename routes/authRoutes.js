import express from "express";

const router = express.Router();

// the controller functions to be used with the below routes
import { register, login } from "../controllers/authController.js";

router.route("/register").post(register);
router.route("/login").post(login);
// router.route('/update').patch(update)

export default router;
