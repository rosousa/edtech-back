import { Router } from "express";
import * as authenticationMiddleware from "../middlewares/authenticationMiddleware.js";
import * as authenticationController from "../controllers/authenticationController.js";

const router = Router();

router.post(
  "/sign-in",
  authenticationMiddleware.signIn,
  authenticationController.signIn
);

router.post(
  "/sign-up",
  authenticationMiddleware.signUp,
  authenticationController.signUp
);

export default router;
