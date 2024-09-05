import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CssBaseline } from "@mui/material";

import "./i18n";
import "index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
