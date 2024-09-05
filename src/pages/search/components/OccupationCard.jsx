import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  FileCopy as FileCopyIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from "@mui/icons-material";

import { BACKEND_URL } from "routes/backendURLs";
import useLanguageTranslation from "hooks/useLanguageTranslation";
import { getTranslation } from "utilities/occupation";

const OccupationCard = ({
  occupation,
  onCopyUrl,
  onViewPosts,
  onSelect,
  defaultImagePath,
  isAddCard,
  onClickOpenAddOccupation,
}) => {
  const { t, i18n } = useLanguageTranslation();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isAddCard ? (
          <>
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AddCircleOutlineIcon
                sx={{
                  fontSize: 80,
                  color: "text.primary",
                }}
              />
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                onClick={onClickOpenAddOccupation}
                size="medium"
                variant="outlined"
                color="primary"
              >
                {t("suggestOne")}
              </Button>
            </CardActions>
          </>
        ) : (
          <>
            <CardMedia
              component="div"
              sx={{
                pt: "75%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={`${BACKEND_URL}/${occupation.picturePath}`}
                alt={occupation._id}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                onError={(e) => {
                  e.target.src = defaultImagePath;
                }}
              />
            </CardMedia>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">
                {getTranslation(occupation.translations, i18n.language).name}
              </Typography>
              <Typography>
                {
                  getTranslation(occupation.translations, i18n.language)
                    .description
                }
              </Typography>
            </CardContent>
            <Stack spacing={1}>
              <Button
                onClick={() => onCopyUrl(occupation)}
                size="medium"
                variant="outlined"
                color="primary"
              >
                <FileCopyIcon />
                {t("copyUrl")}
              </Button>
              <Button
                onClick={() => onViewPosts(occupation)}
                size="medium"
                variant="outlined"
                color="primary"
              >
                {t("viewUploadedPosts")}
              </Button>
              <Button
                onClick={() => onSelect(occupation)}
                size="medium"
                variant="contained"
                color="primary"
              >
                {t("choose")}
              </Button>
            </Stack>
          </>
        )}
      </Card>
    </Grid>
  );
};

export default OccupationCard;
