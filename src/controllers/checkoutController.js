import db from "../database/db.js";
import checkoutSchema from "../schemas/checkoutSchema.js";

async function checkout(req, res) {
  const { products, price } = req.body;
  const { userId } = res.locals;

  const validCheckout = checkoutSchema.validate({
    products,
    price,
  });

  if (validCheckout.error) {
    return res.sendStatus(422);
  }

  const date = new Date().toLocaleDateString("pt-BR");

  try {
    await db.collection("Invoice").insertOne({
      userId,
      products,
      price: price * 100,
      date,
    });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export default checkout;
