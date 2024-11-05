import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        color={"HighLightText"}
        variant="h6"
        sx={{ fontSize: "18px" }}
      >
        Designed and Developed By
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          Developer Hasan Fati
        </Button>
      </Typography>
    </Box>
  );
};

export default Footer;
