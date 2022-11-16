// React
import { useMemo, useState } from "react";

// Next
import NextLink from "next/link";

// Material UI
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Link,
} from "@mui/material";

export const ProductCard = ({ product }) => {
  const [isHovered, setisHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <Card>
        <NextLink href="/product/slug" passHref legacyBehavior prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                image={productImage}
                alt={product.title}
                className="fadeIn"
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  );
};
