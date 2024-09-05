import React from "react";
import { Typography, Select, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import i18next from "i18next";

const LanguageSelector = () => {
  const languagesWithTranslations = {
    ar: "العربية",
    en: "English",
    he: "עברית",
  };

  const handleChange = (e) => {
    const newLanguage = e.target.value;
    i18next.changeLanguage(newLanguage);
  };

  return (
    <Select
      value={i18next.language}
      onChange={handleChange}
      sx={{
        p: "0.1rem",
        m: "0.1rem",
        color: "white",
        ".MuiSvgIcon-root": { color: "white" },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: "black",
          },
        },
      }}
      renderValue={() => (
        <LanguageIcon sx={{ fontSize: "1rem", color: "white" }} />
      )}
    >
      {Object.entries(languagesWithTranslations).map(([code, translation]) => (
        <MenuItem key={code} value={code} sx={{ color: "white" }}>
          <Typography>{translation}</Typography>
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelector;
