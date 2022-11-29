// Database
import { db } from "../../../database";
// Models
import { Product } from "../../../models";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return searchProduct(req, res);

    default:
      return res.status(400).json({ message: "BAD REQUEST" });
  }
}

const searchProduct = async (req, res) => {
  let { query = "" } = req.query;

  if (query.length === 0) {
    return res
      .status(400)
      .json({ message: "Debe especificar el query de búsqueda" });
  }

  query = query.toString().toLowerCase();

  await db.connect();
  const products = await Product.find({
    $text: { $search: query },
  })
    .select("title images price inStock slug -_id")
    .lean();
  await db.disconnect();

  return res.status(200).json({ message: products });
};
