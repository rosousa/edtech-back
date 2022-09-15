import joi from "joi";

const checkout = joi.object({
  products: joi.array().items(joi.number()).min(1).required(),
  price: joi.number().required(),
});

export default checkout;
