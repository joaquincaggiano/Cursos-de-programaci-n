// Database
import { db } from "../../../database";
import { User } from "../../../models";

// Token
import { jwt } from "../../../utils";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return checkJWT(req, res);

    default:
      res.status(400).json({
        message: "Bad Request",
      });
  }
}

const checkJWT = async (req, res) => {
  const { token = "" } = req.cookies;

  let userId = "";

  try {
    userId = await jwt.isValidToken(token);
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Token de autorización no es válido" });
  }

  await db.connect();
  const user = await User.findById(userId).lean();
  await db.disconnect();

  if (!user) {
    return res.status(400).json({ message: "No existe el usuario con ese id" });
  }

  const { _id, email, name, role } = user;

  return res.status(200).json({
    token: jwt.signToken(_id, email),
    user: {
      email,
      role,
      name,
    },
  });
};
