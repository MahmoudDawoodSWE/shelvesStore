import React, { useState } from "react";
import { Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { BACKEND_URL_PATHS } from "routes/backendURLs";

const AvatarImg = ({ image }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <Avatar
      sx={{ width: "3.3rem", height: "3.3rem" }}
      src={
        !error && image ? `${BACKEND_URL_PATHS.assets.picture}/${image}` : ""
      }
      onError={handleError}
    >
      {(!image || error) && <PersonIcon />}
    </Avatar>
  );
};

export default AvatarImg;
