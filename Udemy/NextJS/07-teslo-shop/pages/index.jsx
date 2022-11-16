// Database
import { initialData } from "../database/products";

// Components
import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products";

// Material UI
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <ShopLayout title="Teslo-Shop - Home" pageDescription={"Encuentra los mejores productos de Teslo"}>
      <Typography variant="h1" component="h1">Tienda</Typography>
      <Typography variant="h2" sx={{marginBottom: 1}}>Todos los productos</Typography>

      <ProductList products={initialData.products}/>

    </ShopLayout>
  )
}
