import { db } from "./";
import { Product } from "../models";

export const getProductBySlug = async (slug) => {
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  if (!product) {
    return null;
  }

  return JSON.parse(JSON.stringify(product));
};

export const getAllProductSlug = async () => {
  await db.connect();
  const slugs = await Product.find().select("slug -_id").lean();
  await db.disconnect();

  return slugs;
};

export const getProductsByTerm = async (term) => {
  term = term.toString().toLowerCase();

  await db.connect();
  const products = await Product.find({
    $text: { $search: term },
  })
    .select("title images price inStock slug -_id")
    .lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(products))
};

export const getAllProducts = async () => {
  await db.connect();
  const allProducts = await Product.find().lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(allProducts));
};
