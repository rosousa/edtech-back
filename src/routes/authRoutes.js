import { Router } from "express";
import * as authMiddleware from "../middlewares/authMiddleware.js";
import * as authController from "../controllers/authController.js";

const router = Router();

router.post("/sign-in", authMiddleware.signIn, authController.signIn);

router.post("/sign-up", authMiddleware.signUp, authController.signUp);

export default router;
