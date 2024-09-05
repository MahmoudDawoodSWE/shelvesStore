import { Box } from "@mui/material";
import CategoryButton from "./CategoryButton";

const CategoryList = ({
  categories,
  handleCategoryClick,
  handleClickOpenAddOccupation,
  defaultImagePath,
  large,
}) => {
  return (
    <Box
      sx={{
        pb: 2,
        display: "flex",
        overflowX: "auto",
        gap: large ? "50px" : "20px",
        justifyContent: "center",
        flexWrap: "wrap",

      }}
    >
      {categories.map((category, index) => (
        <CategoryButton
          key={index}
          category={category}
          onClick={() => handleCategoryClick(category._id)}
          defaultImagePath={defaultImagePath}
          large={large}
        />
      ))}
    </Box>
  );
};

export default CategoryList;
