import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const LogoImage = ({
  goto = "/home",
  size = "3.3rem",
  src = "../assets/bestrf_logo.png",
}) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "opacity 0.2s ease-in-out",
        "&:hover": {
          opacity: 0.8,
        },
        overflow: "hidden", // Ensures the image does not overflow the container
      }}
      onClick={() => navigate(goto)}
    >
      <Box
        component="img"
        src={src}
        alt="Best RF"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain", // Ensures the entire image fits within the Box
        }}
      />
    </Box>
  );
};

export default LogoImage;
