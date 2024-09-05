import { MenuItem } from "@mui/material";

export const getOccupationName = (occupation, currentLanguage) => {
  const translation = occupation?.translations?.find(
    (t) => t.language.toLowerCase() === currentLanguage.toLowerCase()
  );
  return translation
    ? translation.name
    : occupation.translations && occupation.translations.length > 0
    ? occupation.translations[0].name
    : "Unknown Occupation";
};
export const getTranslation = (translations, currentLanguage) => {
  if (!translations) return { name: "none" };
  const translation = translations.find(
    (t) => t.language.toLowerCase() === currentLanguage.toLowerCase()
  );
  return translation ? translation : translations[0];
};


const generateMenuItemsRecursive = (
  occupations,
  selectedOccupations,
  currentLanguage,
  paddingLevel = 1
) => {
  return occupations.flatMap((occupation) => [
    <MenuItem
      key={occupation._id}
      value={occupation._id}
      sx={{ paddingX: `${paddingLevel}rem` }}
    >
      {getOccupationName(occupation, currentLanguage)}
    </MenuItem>,
    ...(selectedOccupations.includes(occupation._id) &&
    occupation.subOccupations
      ? generateMenuItemsRecursive(
          occupation.subOccupations,
          selectedOccupations,
          currentLanguage,
          paddingLevel + 1
        )
      : []),
  ]);
};

export const generateMenuItems = (
  occupations,
  selectedOccupations,
  currentLanguage
) => {
  return generateMenuItemsRecursive(
    occupations,
    selectedOccupations,
    currentLanguage
  );
};