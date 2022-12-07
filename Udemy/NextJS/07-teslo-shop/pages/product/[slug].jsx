// React hooks
import { useState, useContext } from "react";

// Next
import { useRouter } from "next/router";

// Context
import { CartContext } from "../../context";

// Components
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui";

// Function oneProduct
import { dbProducts } from "../../database";

// Material UI
import { Box, Button, Chip, Grid, Typography } from "@mui/material";

const ProductPage = ({ product }) => {
  const router = useRouter();

  const {addProductToCart} = useContext(CartContext)

  const [tempCartProduct, setTempCartProduct] = useState({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  });

  const onSelectedSize = (size) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      size,
    }));
  };

  const onUpdateQuantity = (newQuantity) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity: newQuantity,
    }));
  };

  const onAddProduct = () => {
    if (!tempCartProduct.size) return;
    // Dispatch del context para agregar al carrito
    addProductToCart(tempCartProduct)
    router.push("/cart")
  };

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>
            <Typography variant="subtitle1" component="h2">
              ${product.price}
            </Typography>

            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2"></Typography>
              <ItemCounter
                currentValue={tempCartProduct.quantity}
                updateQuantity={onUpdateQuantity}
                maxValue={product.inStock > 10 ? 10 : product.inStock}
              />
              <SizeSelector
                selectedSize={tempCartProduct.size}
                sizes={product.sizes}
                onSelectedSize={onSelectedSize}
              />
            </Box>

            {product.inStock > 0 ? (
              <Button
                color="secondary"
                className="circular-btn"
                onClick={onAddProduct}
              >
                {tempCartProduct.size
                  ? "Agregar al carrito"
                  : "Seleccione una talla"}
              </Button>
            ) : (
              <Chip
                label="No hay disponibles"
                color="error"
                variant="outlined"
              />
            )}

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

// export const getServerSideProps = async ({ params }) => {
//   const { slug = "" } = params;
//   const product = await dbProducts.getProductBySlug(slug);

//   if (!product) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { product },
//   };
// };

export const getStaticPaths = async (ctx) => {
  const slugs = await dbProducts.getAllProductSlug();

  return {
    paths: slugs.map(({ slug }) => {
      return { params: { slug } };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug = "" } = params;
  const product = await dbProducts.getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { product },
    revalidate: 60 * 60 * 24,
  };
};

export default ProductPage;
