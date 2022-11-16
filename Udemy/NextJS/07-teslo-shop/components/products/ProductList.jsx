// Components
import { ProductCard } from "./ProductCard";

// Material UI
import { Grid } from "@mui/material"

export const ProductList = ({products}) => {
  return (
    <Grid container spacing={4}>
        {
            products.map((product, i) => {
                return <ProductCard product={product} key={product.slug} />
            })
        }
    </Grid>
  )
}
