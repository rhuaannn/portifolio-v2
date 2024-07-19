import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./style/global";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { Header } from "./components/Header/index";
import { Profile } from "./components/Profile/index";
import { Project } from "./components/Project/index";
import { AppRoutes } from "./routes/app.routes.jsx";
 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
 
        <GlobalStyles />
        <AppRoutes />
        <Header />
        <Profile />
        <Project />
 
    </ThemeProvider>
  </React.StrictMode>
);
