// Database
import { db, SHOP_CONSTANTS } from "../../../database";
// Models
import { Product } from "../../../models";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);

    default:
      return res.status(400).json({
        message: "BAD REQUEST",
      });
  }
}

const getProducts = async (req, res) => {
  const { gender = "all" } = req.query;

  let condition = {};

  if (gender !== "all" && SHOP_CONSTANTS.validGender.includes(gender)) {
    condition = { gender };
  }

  await db.connect();
  const products = await Product.find(condition)
    .select("title images price inStock slug -_id")
    .lean();
  await db.disconnect();

  return res.status(200).json(products);
};
