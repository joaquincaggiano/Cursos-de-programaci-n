// Components
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";

// SWR
import { useProducts } from "../../hooks";

// Material UI
import { Typography } from "@mui/material";

export default function WomenPage() {
  const { products, isLoading } = useProducts("/products?gender=women");

  return (
    <ShopLayout
      title="Teslo-Shop - Women"
      pageDescription={"Encuentra los mejores productos de Teslo para mujeres"}
    >
      <Typography variant="h1" component="h1">
        Mujeres
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        Productos para ellas
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}