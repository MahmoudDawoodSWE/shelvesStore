import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import LogoImage from "components/small/LogoImg";
import useComponentTranslation from "hooks/useLanguageTranslation";

// Importing Icons
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter"; // Representing Ton (Heavy)
import AirIcon from "@mui/icons-material/Air"; // Representing Light
import ShopIcon from "@mui/icons-material/ShoppingCart"; // Representing Shop

export default function SignInSide() {
  const { t } = useComponentTranslation();

  // Example categories array with icons and links
  const categories = [
    {
      name: t("light_storage"),
      icon: <AirIcon sx={{ fontSize: 50, color: "white" }} />,
      link: "/search/null",
    },
    {
      name: t("heavy_storage"),
      icon: <FitnessCenterIcon sx={{ fontSize: 50, color: "white" }} />,
      link: "/search/null",
    },
    {
      name: t("supermarket"),
      icon: <ShopIcon sx={{ fontSize: 50, color: "white" }} />,
      link: "/search/null",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: 'url("../assets/bestrf1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Overlay for darkening the background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Main Content */}
      <Grid mt="1rem" container component="main" sx={{ zIndex: 2 }}>
        <Grid item xs={12} lg={12} xl={12} md={12} sm={12}>
          <Box
            sx={{
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              zIndex: 2,
            }}
          >
            <LogoImage size="300px" goto="/search/null" />

            <Typography
              component="h1"
              mt="1rem"
              variant="h2"
              sx={{
                color: "white",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                  xl: "3.5rem",
                },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            >
              {t("introduction")}
            </Typography>

            {/* Categories List with Icons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
                mt: 3,
              }}
            >
              {categories.map((category, index) => (
                <Box
                  key={index}
                  component={Link}
                  to={category.link}
                  sx={{
                    textAlign: "center",
                    maxWidth: "150px",
                    textDecoration: "none",
                  }}
                >
                  {category.icon}
                  <Typography
                    sx={{
                      color: "white",
                      mt: 1,
                      fontSize: "1rem",
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {category.name}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Button
              component={Link}
              to="/search/null"
              variant="contained"
              color="secondary"
              sx={{
                mt: "1rem",
                mb: "1rem",
                color: "white",
                fontSize: {
                  xs: "1rem",
                  sm: "1.125rem",
                  md: "1.25rem",
                  lg: "1.375rem",
                  xl: "1.5rem",
                },
              }}
            >
              {t("find_solutions")}
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Company Logos Section */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 3, // Ensure this is above the overlay
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="../assets/company-logos.png" // Replace with the path to your logo image
          alt="Company Logos"
          style={{ maxWidth: "250px" }} // Adjust the size as needed
        />
      </Box>
    </Box>
  );
}
