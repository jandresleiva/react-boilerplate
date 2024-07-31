import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./themes";
import { LogInPage } from "./pages/LogIn";

function App() {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <>
      <ThemeProvider theme={getCurrentTheme() ? darkTheme : lightTheme}>
        <LogInPage />
      </ThemeProvider>
    </>
  );
}

export default App;
