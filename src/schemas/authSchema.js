import joi from "joi";

const signInSchema = joi.object({
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: joi.string().min(4).required(),
});

const signUpSchema = joi.object({
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: joi.string().min(4).required(),
  passwordConfirm: joi.ref("password"),
});

export { signInSchema, signUpSchema };
