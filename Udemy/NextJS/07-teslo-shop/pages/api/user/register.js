// Database
import { db } from "../../../database";
import { User } from "../../../models";

// Bcryptjs
import bcrypt from "bcryptjs";

// Token y validaciones
import { jwt, validations } from "../../../utils";

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      return registerUser(req, res);

    default:
      res.status(400).json({
        message: "Bad Request",
      });
  }
}

const registerUser = async (req, res) => {
  const { email = "", password = "", name = "" } = req.body;

  if (password.length < 6) {
    return res
      .status(400)
      .json({
        message: "La contraseña debe de contener al menos 6 carácteres",
      });
  }

  if (name.length < 2) {
    return res
      .status(400)
      .json({ message: "El nombre debe de contener al menos 2 carácteres" });
  }

  if(!validations.isValidEmail(email)) {
    return res
      .status(400)
      .json({ message: "El correo no es válido" });
  }

  await db.connect();
  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ message: "Ya existe el usuario" });
  }

  const newUser = new User({
    email: email.toLocaleLowerCase(),
    password: bcrypt.hashSync(password),
    role: "client",
    name,
  });

  try {
    await newUser.save({ validateBeforeSave: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Revisar logs del servidor" });
  }

  const { _id, role } = newUser;

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
