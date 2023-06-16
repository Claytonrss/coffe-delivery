import { BrowserRouter } from "react-router-dom";
import RoutesList from "./routes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
