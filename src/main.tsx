import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import theme from "./theme";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { TasksProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TasksProvider>
        <App />
      </TasksProvider>
    </ThemeProvider>
  </StrictMode>
);
