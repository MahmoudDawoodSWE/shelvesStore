import { useEffect, useState } from "react";
import { Box, AppBar, Toolbar, Popover, Typography } from "@mui/material";
import LanguageSelector from "components/buttons/LanguageSelector";
import PhoneIcon from "@mui/icons-material/Phone";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAccessibilityMenuClose = () => {
    setAnchorEl(null);
  };

  const isAccessibilityMenuOpen = Boolean(
    anchorEl && document.contains(anchorEl)
  );

  const accessibilityMenu = (
    <Popover
      anchorEl={anchorEl}
      open={isAccessibilityMenuOpen}
      onClose={handleAccessibilityMenuClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Box p={2}>
        <LanguageSelector />
      </Box>
    </Popover>
  );

  useEffect(() => {
    const handleResize = () => {
      setAnchorEl(null);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppBar
      sx={{
        backgroundColor: "rgba(0, 123, 255, 0.2)", // Semi-transparent blue background
        boxShadow: "none", // Remove the shadow
        height: "80px",
        width: "100%",
        justifyContent: "center",
      }}
      position="fixed"
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Distributes space between items
            width:"100%"
          }}
        >
          {/* Phone Numbers with Icons */}
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <PhoneIcon sx={{ color: "black" }} />
              <Typography
                variant="h6"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                022764187
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <PhoneIcon sx={{ color: "black" }} />
              <Typography
                variant="h6"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                0568888522
              </Typography>
            </Box>
          </Box>
          <LanguageSelector />
        </Box>
      </Toolbar>
      {accessibilityMenu}
    </AppBar>
  );
};

export default Navbar;
