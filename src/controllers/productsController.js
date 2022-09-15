import db from "../database/db.js";

async function listProducts(req, res) {
    try {
        const products = await db.collection("products").find({}).toArray();

        res.status(201).send(products);
    } catch (error) {
        console.error(error);
    }
}

export { listProducts };