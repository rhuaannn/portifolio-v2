import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import {AppRoutes} from "./routes/app.routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes/>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
