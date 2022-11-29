// Components
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";

// SWR
import { useProducts } from "../../hooks";

// Material UI
import { Typography } from "@mui/material";

export default function MenPage() {
  const { products, isLoading } = useProducts("/products?gender=men");
  console.log("products", products)

  return (
    <ShopLayout
      title="Teslo-Shop - Men"
      pageDescription={"Encuentra los mejores productos de Teslo para hombres"}
    >
      <Typography variant="h1" component="h1">
        Hombres
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        Productos para ellos
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}