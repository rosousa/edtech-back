import db from "../database/db.js";

async function checkAuthorization(req, res, next) {
  let { authorization } = req.headers;

  authorization = authorization?.replace("Bearer ", "");

  try {
    const sessionExists = await db
      .collection("Session")
      .findOne({ token: authorization });

    if (!sessionExists) {
      return res.sendStatus(401);
    }

    res.locals.userId = sessionExists.userId;

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export default checkAuthorization;
