// Database
// import { initialData } from "../database/products";

// Components
import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products";
import { FullScreenLoading } from "../components/ui";

// SWR
import { useProducts } from "../hooks";

// Material UI
import { Typography } from "@mui/material";

export default function Home() {
  const { products, isLoading } = useProducts("/products");

  return (
    <ShopLayout
      title="Teslo-Shop - Home"
      pageDescription={"Encuentra los mejores productos de Teslo"}
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        Todos los productos
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}
