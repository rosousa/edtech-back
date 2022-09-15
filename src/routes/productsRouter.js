import { listProducts, sendProduct } from "../controllers/productsController.js";
import { Router } from "express";

const router = Router();

router.get("/products", listProducts);
router.get("/products/:productId", sendProduct);

export default router;