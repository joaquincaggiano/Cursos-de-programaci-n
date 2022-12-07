// Material UI
import { Box, Button } from "@mui/material";

export const SizeSelector = ({ selectedSize, sizes, onSelectedSize}) => {
  return (
    <Box>
      {sizes.map((size) => {
        return (
          <Button
            key={size}
            size="small"
            color={selectedSize === size ? "primary" : "info"}
            onClick={() => onSelectedSize(size)}
          >
            {size}
          </Button>
        );
      })}
    </Box>
  );
};
