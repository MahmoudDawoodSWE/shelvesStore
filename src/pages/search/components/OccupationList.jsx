import React from "react";
import { Grid } from "@mui/material";
import OccupationCard from "./OccupationCard";

const OccupationList = ({
  filteredOccupations,
  handleCopyUrl,
  navigateToPosts,
  selectOccupation,
  handleClickOpenAddOccupation,
  defaultImagePath,
}) => {
  return (
    
    <Grid container spacing={2}>
      {filteredOccupations.map((occupation) => (
        <OccupationCard
          key={occupation._id}
          occupation={occupation}
          onCopyUrl={handleCopyUrl}
          onViewPosts={(occupation) => navigateToPosts(occupation._id)}
          onSelect={selectOccupation}
          defaultImagePath={defaultImagePath}
        />
      ))}
      {filteredOccupations.length !== 0 && (
        <OccupationCard
          isAddCard
          onClickOpenAddOccupation={handleClickOpenAddOccupation}
        />
      )}
    </Grid>
  );
};

export default OccupationList;
