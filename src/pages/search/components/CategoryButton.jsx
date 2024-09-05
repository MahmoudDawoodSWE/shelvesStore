import React from "react";
import { Box, Typography } from "@mui/material";
import useLanguageTranslation from "hooks/useLanguageTranslation";
import { getTranslation } from "utilities/occupation";

const CategoryButton = ({ category, onClick, defaultImagePath, large }) => {
  const { t, i18n } = useLanguageTranslation();

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: large ? "300px" : "auto",
        height: large ? "300px" : "auto",
        justifyContent: "center",
        cursor: "pointer",
        p: 2, // Padding around the button content
        border: "1px solid #ddd", // Border around the entire button
        borderRadius: "8px", // Rounded corners for the border
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Adds shadow to the whole button
        transition: "transform 0.3s ease-in-out", // Smooth scaling effect on hover
        "&:hover": {
          transform: "scale(1.05)", // Slightly scale up on hover
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: large ? "100%" : "80px",
          height: large ? "100%" : "80px",
          borderRadius: large ? 0 : "50%",
          overflow: "hidden", // Ensures that the image does not overflow the frame
          border: "2px solid #ddd", // Frame around the image
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Adds shadow to the image
        }}
      >
        <img
          src={category ? `../${category.picturePath}` : defaultImagePath}
          alt={category ? category._id : "main_page"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          onError={(e) => {
            e.target.src = defaultImagePath;
          }}
        />
      </Box>
      <Typography
        variant="subtitle2"
        sx={{
          color: "white",
          mt: 1,
          fontSize: large ? "1.5rem" : "1rem", // Adjust font size here
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        {category
          ? getTranslation(category.translations, i18n.language).name
          : t("main_search_page")}
      </Typography>
    </Box>
  );
};

export default CategoryButton;
