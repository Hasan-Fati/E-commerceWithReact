import { ColorModeContext, useMode } from "./theme";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Footer from "./components/footer/Footer";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
          <Hero />
          <Main />
          <Footer />
          <ScrollToTop />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
