import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";

const ScrollToTop = () => {
  return (
    <Zoom in={useScrollTrigger({ threshold: 100 })}>
      <Fab
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        variant="circular"
        size="small"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUp fontSize="medium" />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
