import { Router } from "express";
import authorizationMiddleware from "../middlewares/authorizationMiddleware.js";
import checkoutController from "../controllers/checkoutController.js";

const router = Router();

router.use("/checkout", authorizationMiddleware, checkoutController);

export default router;
