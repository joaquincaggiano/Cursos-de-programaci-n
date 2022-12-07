// React Hooks
import { useContext } from "react";

// Next
import NextLink from "next/link";

// Context
import { CartContext } from "../../context";

// Components
import { ItemCounter } from "../ui";

// Material UI
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

export const CartList = ({ editable = false }) => {
  const { cart, updateCartQuantity, removeCartProduct } =
    useContext(CartContext);

  const onNewCartQuantityValue = (product, newQuantityValue) => {
    product.quantity = newQuantityValue;
    updateCartQuantity(product);
  };

  return (
    <>
      {cart.map((product) => {
        return (
          <Grid
            container
            spacing={2}
            sx={{ mb: 1 }}
            key={product.slug + product.size}
          >
            <Grid item xs={3}>
              <NextLink
                href={`/product/${product.slug}`}
                passHref
                legacyBehavior
              >
                <Link>
                  <CardActionArea>
                    <CardMedia
                      image={`/products/${product.image}`}
                      component="img"
                      sx={{ borderRadius: "5px" }}
                    />
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>

            <Grid item xs={7}>
              <Box display="flex" flexDirection="column">
                <Typography variant="body1">{product.title}</Typography>
                <Typography variant="body1">
                  Talla: <strong>{product.size}</strong>
                </Typography>

                {editable ? (
                  <ItemCounter
                    currentValue={product.quantity}
                    maxValue={10}
                    updateQuantity={(value) =>
                      onNewCartQuantityValue(product, value)
                    }
                  />
                ) : (
                  <Typography variant="h5">
                    {product.quantity}{" "}
                    {product.quantity > 1 ? "productos" : "producto"}
                  </Typography>
                )}
              </Box>
            </Grid>

            <Grid
              item
              xs={2}
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="subtitle1">${product.price}</Typography>
              {/* Editable */}
              {editable && (
                <Button
                  variant="text"
                  color="secondary"
                  onClick={() => removeCartProduct(product)}
                >
                  Remover
                </Button>
              )}
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
