// Components
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { FullScreenLoading } from "../../components/ui";

// SWR
import { useProducts } from "../../hooks";

// Material UI
import { Typography } from "@mui/material";

export default function KidPage() {
  const { products, isLoading } = useProducts("/products?gender=kid");

  return (
    <ShopLayout
      title="Teslo-Shop - Kids"
      pageDescription={"Encuentra los mejores productos de Teslo para niños"}
    >
      <Typography variant="h1" component="h1">
        Niños
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        Productos para los niños
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}