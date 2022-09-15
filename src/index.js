import express from "express";
import cors from "cors";
import productsRouter from "./routes/productsRouter.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(authRoutes);
app.use(productsRouter);

app.listen("4000", () => console.log("Listening on port 4000"));