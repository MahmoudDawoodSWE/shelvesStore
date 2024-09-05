import { Suspense } from "react"; 
import { Box, CircularProgress, Typography } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "./App";

const loadingMarkup = (
  <Box py={4} textAlign="center">
    <Typography variant="h5">Loading...</Typography>
    <CircularProgress />
  </Box>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>
);
