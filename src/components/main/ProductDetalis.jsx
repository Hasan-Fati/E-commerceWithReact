import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

const ProductDetalis = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={300} src="src\Images\robe2.jpeg" alt="" />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">WOMEN&apos;S FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          $12.99
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sunt
          Lorem ipsum dolor sit amet.
        </Typography>
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {["src/Images/robe3.jpeg", "src/Images/robe2.jpeg"].map((item) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                height={100}
                width={90}
                key={item}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetalis;
