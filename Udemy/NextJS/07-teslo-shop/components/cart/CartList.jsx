// Next
import NextLink from "next/link";

// Components
import { ItemCounter } from "../ui";

// Database
import { initialData } from "../../database/products";

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

// Esto es temporal
const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const CartList = ({ editable = false }) => {
  return (
    <>
      {productsInCart.map((product) => {
        return (
          <Grid container spacing={2} sx={{ mb: 1 }} key={product.slug}>

            <Grid item xs={3}>
              {/* toDo: llevar a la página del producto */}
              <NextLink href="/product/slug" passHref legacyBehavior>
                <Link>
                  <CardActionArea>
                    <CardMedia
                      image={`/products/${product.images[0]}`}
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
                  Talla: <strong>M</strong>
                </Typography>

                {/* Condicional */}
                {editable ? (
                  <ItemCounter />
                ) : (
                  <Typography variant="h5">3 items</Typography>
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
                <Button variant="text" color="secondary">
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
