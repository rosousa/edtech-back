import * as authenticationSchemas from "../schemas/authenticationSchema.js";
import db from "../database/db.js";

async function signIn(req, res, next) {
  const { email, password } = req.body;

  const validCredentials = authenticationSchemas.signInSchema.validate({
    email,
    password,
  });

  if (validCredentials.error) {
    return res.sendStatus(422);
  }

  res.locals.signInCredentials = { email, password };

  next();
}

async function signUp(req, res, next) {
  const { email, password, passwordConfirm } = req.body;

  const validCredentials = authenticationSchemas.signUpSchema.validate({
    email,
    password,
    passwordConfirm,
  });

  if (validCredentials.error) {
    return res.sendStatus(422);
  }

  try {
    const userExists = await db.collection("User").findOne({ email });

    if (userExists) {
      return res.sendStatus(409);
    }

    res.locals.signUpCredentials = { email, password };
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  next();
}

export { signIn, signUp };
