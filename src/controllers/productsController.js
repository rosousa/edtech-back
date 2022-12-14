import db from "../database/db.js";
import { ObjectId } from "mongodb"

async function listProducts(req, res) {
    try {
        const products = await db.collection("products").find({}).toArray();

        res.status(201).send(products);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

async function getProduct(req, res) {
    const productId = req.params.productId;
    try {
        const product = await db.collection("products").findOne({ _id: ObjectId(productId)});
        res.status(201).send(product);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export { listProducts, getProduct };