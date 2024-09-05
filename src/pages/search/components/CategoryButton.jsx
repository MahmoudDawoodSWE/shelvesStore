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
        width: large ? "200px" : "auto",
        height: large ? "200px" : "auto",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <img
        src={category ? `../${category.picturePath}` : defaultImagePath}
        alt={category ? category._id : "main_page"}
        style={{
          width: large ? "100%" : "80px",
          height: large ? "100%" : "80px",
          borderRadius: large ? 0 : "50%",
          objectFit: "cover",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Adds a shadow
        }}
        onError={(e) => {
          e.target.src = defaultImagePath;
        }}
      />
      <Typography
        variant="subtitle2"
        sx={{
          mt: 1,
          fontSize: large ? "1.5rem" : "1rem", // Adjust font size here
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
