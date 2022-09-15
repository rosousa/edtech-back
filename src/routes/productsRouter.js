import { listProducts } from "../controllers/productsController";
import { Router } from "express";

const router = Router();

router.get("/products", listProducts);

export default router;