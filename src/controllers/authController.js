import db from "../database/db.js";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

async function signIn(req, res) {
  const { email, password } = res.locals.signInCredentials;

  try {
    const userExists = await db.collection("User").findOne({ email });

    if (!userExists) {
      console.log(userExists);
      return res.sendStatus(401);
    }

    if (!bcrypt.compareSync(password, userExists.password)) {
      return res.sendStatus(401);
    }

    const token = uuid();

    const activeSession = await db
      .collection("Session")
      .findOne({ userId: userExists._id });

    if (activeSession) {
      await db.collection("Session").deleteOne({ _id: activeSession._id });
    }

    await db.collection("Session").insertOne({ userId: userExists._id, token });

    res.send({ token }).status(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function signUp(req, res) {
  const { email, password } = res.locals.signUpCredentials;

  try {
    const hashPassword = bcrypt.hashSync(password, 10);

    await db.collection("User").insertOne({ email, password: hashPassword });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { signIn, signUp };
