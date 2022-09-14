import * as authSchemas from "../schemas/authSchema.js";
import db from "../database/db.js";

async function signIn(req, res, next) {
  const { email, password } = req.body;

  const validCredentials = authSchemas.signInSchema.validate({
    email,
    password,
  });

  if (validCredentials.error) {
    return res.sendStatus(401);
  }

  res.locals.signInCredentials = { email, password };

  next();
}

async function signUp(req, res, next) {
  const { name, email, password, passwordConfirm } = req.body;

  const validCredentials = authSchemas.signUpSchema.validate({
    name,
    email,
    password,
    passwordConfirm,
  });

  if (validCredentials.error) {
    return res.sendStatus(401);
  }

  try {
    const userExists = await db.collection("User").findOne({ email });

    if (userExists) {
      return res.sendStatus(409);
    }

    res.locals.signUpCredentials = { name, email, password };
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

  next();
}

export { signIn, signUp };