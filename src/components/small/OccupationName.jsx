import React from "react";
import i18next from "i18next";
import StyledTypographyTitle from "components/styled/StyledTypographyTitle";

const OccupationName = ({ occupation, white = null }) => {
  if (!occupation) {
    return (
      <StyledTypographyTitle>{"No occupation available"}</StyledTypographyTitle>
    );
  }

  const currentLanguage = i18next.language || "en";

  const getOccupationName = (occupation) => {
    const translation = occupation.translations.find(
      (t) => t.language.toLowerCase() === currentLanguage.toLowerCase()
    );
    return translation ? translation.name : occupation.translations[0].name;
  };

  const occupationName = getOccupationName(occupation);
  if (white)
    return (
      <StyledTypographyTitle sx={{ color: "white" }}>
        {occupationName}
      </StyledTypographyTitle>
    );
  else
    return (
      <StyledTypographyTitle variant="h6">
        {occupationName}
      </StyledTypographyTitle>
    );
};

export default OccupationName;
