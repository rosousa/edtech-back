import express from "express";
import cors from "cors";
import productsRouter from "./routes/productsRouter.js";
import authenticationRoutes from "./routes/authenticationRoutes.js";
import checkoutRoute from "./routes/checkoutRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(authenticationRoutes);

app.use(productsRouter);

app.use(checkoutRoute);

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
