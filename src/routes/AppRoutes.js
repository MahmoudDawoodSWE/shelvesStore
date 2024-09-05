import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import Page404 from "pages/error/Page404";
import Navbar from "pages/navbar";
const Welcome = lazy(() => import("pages/welcome"));
const Search = lazy(() => import("pages/search"));

const LoadingMessage = () => (
  <Box py={4} textAlign="center">
    <Typography variant="h5">Loading...</Typography>
    <CircularProgress />
  </Box>
);

const AppRoutes = ({ isLoggedIn, isAdmin, isWorker }) => {
  return (
    <Suspense fallback={<LoadingMessage />}>
      <Navbar />
      <Routes>
        <Route path="/search/:pageName" element={<Search isPage={true} />} />
        <Route path="/" element={<Welcome />} />
        <Route path="404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
