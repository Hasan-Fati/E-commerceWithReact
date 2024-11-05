import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";

import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import ProductDetalis from "./ProductDetalis";

const Main = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a excusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            // @ts-ignore
            sx={{ color: theme.palette.text.primary }}
            className="category-button"
            value="left"
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>
          <ToggleButton
            // @ts-ignore
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="category-button"
            value="center"
            aria-label="centered"
          >
            Men category
          </ToggleButton>
          <ToggleButton
            // @ts-ignore
            sx={{ color: theme.palette.text.primary }}
            className="category-button"
            value="right"
            aria-label="right aligned"
          >
            Women category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {["a", "b"].map((item) => {
          return (
            <Card
              key={item}
              sx={{
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root ": {
                  transform: "scale(1.1)",
                  rotate: "1deg",
                  transition: ".35s",
                },
              }}
            >
              <CardMedia
                sx={{ height: 277 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    T-shirt
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                    $12.99
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                  adipisci recusandae praesentium maxime fuga doloremque
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={handleClickOpen}
                  sx={{ textTransform: "capitalize" }}
                  size="small"
                >
                  <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
                  add to cart
                </Button>
                <Rating name="read-only" precision={0.1} value={4.5} readOnly />
              </CardActions>
            </Card>
          );
        })}
      </Stack>
      <Dialog
        sx={{
          ".MuiPaper-root": {
            minWidth: { xs: "100%", md: 800 },
          },
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <IconButton
          sx={{
            ":hover": {
              color: "red",
              rotate: "180deg",
              transition: "0.3s",
            },
            position: "absolute",
            top: 0,
            right: 10,
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
        <ProductDetalis />
      </Dialog>
    </Container>
  );
};

export default Main;
