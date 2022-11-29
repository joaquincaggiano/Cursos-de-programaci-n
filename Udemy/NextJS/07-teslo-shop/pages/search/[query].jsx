// Components
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";

// Function para producto por el search
import { dbProducts } from "../../database";

// Material UI
import { Box, Typography } from "@mui/material";

export default function SearchPage({ products, foundProducts, query }) {
  return (
    <ShopLayout
      title="Teslo-Shop - Search"
      pageDescription={"Encuentra los mejores productos de Teslo"}
    >
      <Typography variant="h1" component="h1">
        Buscar productos
      </Typography>

      {foundProducts ? (
        <Typography variant="h2" sx={{ marginBottom: 1 }} textTransform="capitalize">
          {query}
        </Typography>
      ) : (
        <Box display="flex">
          <Typography variant="h2" sx={{ mb: 1 }}>
            No encontramos ningún producto:
          </Typography>
          <Typography variant="h2" sx={{ ml: 1 }} color="secondary" textTransform="capitalize">
            {query}
          </Typography>
        </Box>
      )}

      <ProductList products={products} />
    </ShopLayout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { query = "" } = params;

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await dbProducts.getProductsByTerm(query);
  // puede ser que no hay productos encontrados y debemos mostrar otros
  const foundProducts = products.length > 0;
  if (!foundProducts) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};
