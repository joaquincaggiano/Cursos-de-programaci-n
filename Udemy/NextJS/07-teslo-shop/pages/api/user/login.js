// Database
import { db } from "../../../database";
import { User } from "../../../models";

// Bcryptjs
import bcrypt from "bcryptjs";

// Token
import {jwt} from "../../../utils"

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return loginUser(req, res);

    default:
      res.status(400).json({
        message: "Bad Request",
      });
  }
}

const loginUser = async (req, res) => {
  const { email = "", password = "" } = req.body;

  await db.connect();
  const user = await User.findOne({ email });
  await db.disconnect();

  if (!user) {
    return res.status(400).json({ message: "Correo o contraseña no válidos" });
  }

  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ message: "Correo o contraseña no válidos" });
  }

  const { role, name, _id } = user;

  const token = jwt.signToken(_id, email);

  return res.status(200).json({
    token,
    user: {
      email,
      role,
      name,
    },
  });
};
