import {
  Grid,
  IconButton,
  Box,
  Container,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";
import {
  FileCopy as FileCopyIcon,
  ArrowBack as ArrowBackIcon,
  Phone as PhoneIcon, // Add PhoneIcon import
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { copyToClipboard } from "utilities/clipboardUtils";
import useLanguageTranslation from "hooks/useLanguageTranslation";
import CategoryList from "./components/CategoryList";
import OccupationList from "./components/OccupationList";
import { getTranslation } from "utilities/occupation";
import data from "data/occupations.json";
export default function SearchOccupation() {
  const { t, i18n } = useLanguageTranslation();
  const [filteredOccupations, setFilteredOccupations] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedOccupation, setSelectedOccupation] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const occupations = data;
  const categories = occupations.filter((occupation) => occupation.level === 0);
  const defaultImagePath = "../assets/bestrf_logo.png";
  const selectedOccupationObject = occupations.find(
    (occ) => occ._id === selectedOccupation
  );

  const { pageName } = useParams();

  useEffect(() => {
    if (pageName) {
      const occupation = occupations.find((occ) => occ.pageName === pageName);
      if (occupation) {
        setSelectedOccupation(occupation._id);
        const sonList = occupations.filter(
          (temp) => occupation._id === temp.parentId
        );
        setFilteredOccupations(sonList);
        setSelectedItems((prev) => {
          if (prev.some((item) => item._id === occupation._id)) {
            return prev;
          }
          return [...prev, occupation];
        });
      }
    }
  }, [pageName, occupations]);

  const handleClickOpenAddOccupation = () => {};

  const handleCategoryClick = (_id) => {
    setSelectedOccupation(_id);
    const sons = occupations.filter(
      (occupation) => _id === occupation.parentId
    );
    const father = occupations.find((occupation) => _id === occupation._id);
    setFilteredOccupations(sons);
    setSelectedItems((prev) => {
      if (prev.some((item) => item._id === father._id)) {
        return prev;
      }
      return [...prev, father];
    });
  };

  const occupationClicked = (occupation) => {
    setSelectedOccupation(occupation._id);
    setSelectedItems((prev) => {
      if (prev.some((item) => item._id === occupation._id)) {
        return prev;
      }
      return [...prev, occupation];
    });
    const sonList = occupations.filter(
      (temp) => occupation._id === temp.parentId
    );
    if (sonList.length !== 0) setFilteredOccupations(sonList);
  };

  const handleCopyUrl = (occupation) => {
    const url = `${window.location.origin}/search/${occupation?.pageName}`;
    copyToClipboard(url, t);
  };

  const handleBackToCategories = () => {
    setSelectedOccupation(null);
    setFilteredOccupations([]);
    setSelectedItems([]);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundImage: 'url("../assets/searchBackgrond.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          pb: "2rem",
          mt: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          backgroundColor: "rgba(128, 128, 128, 0.7)",
          borderRadius: 2,
          p: 2,
          position: "relative",
        }}
        maxWidth="lg"
      >
        {selectedOccupation && (
          <>
            <IconButton
              onClick={handleBackToCategories}
              color="primary"
              sx={{
                position: "absolute",
                top: "0rem",
                left: "0rem",
                zIndex: 1000,
              }}
            >
              <ArrowBackIcon
                sx={{
                  fontSize: "3rem",
                }}
              />
            </IconButton>

            <IconButton
              onClick={() => handleCopyUrl(selectedOccupationObject)}
              color="primary"
              sx={{
                position: "absolute",
                top: "0px",
                right: "0px",
                zIndex: 1000,
              }}
            >
              <FileCopyIcon /> {"Link"}
            </IconButton>
          </>
        )}

        <Typography
          component="h1"
          mt="3rem"
          variant="h2"
          sx={{
            color: "white",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
              xl: "3.5rem",
            },
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          {t("search_page_description")}
        </Typography>

        {selectedOccupation && (
          <Box>
            <Typography
              component="h1"
              mt="1rem"
              variant="h5"
              sx={{
                color: "white",
                fontSize: {
                  xs: "1.1rem",
                  sm: "1.25rem",
                  md: "1.5rem",
                  lg: "1.75rem",
                  xl: "2rem",
                },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                textAlign: "center",
              }}
            >
              {
                getTranslation(
                  selectedOccupationObject.translations,
                  i18n.language
                ).description
              }
            </Typography>
            {selectedOccupationObject.gallery &&
              selectedOccupationObject.gallery.length > 0 && (
                <Box sx={{ mt: 4 }}>
                  <Grid container spacing={2}>
                    {selectedOccupationObject.gallery.map((image, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box
                          sx={{
                            width: "100%",
                            height: "400px",
                            backgroundImage: `url(../${image?.path})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: 1,
                            boxShadow: 2,
                            mb: 2,
                            zIndex: 10,
                            position: "relative",
                            opacity: 1,
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
          </Box>
        )}

        {selectedItems.length === 0 && (
          <CategoryList
            categories={categories}
            handleCategoryClick={handleCategoryClick}
            handleClickOpenAddOccupation={handleClickOpenAddOccupation}
            defaultImagePath={defaultImagePath}
            large={filteredOccupations.length === 0}
          />
        )}

        {filteredOccupations.length > 0 && (
          <Typography variant="h6" gutterBottom>
            {t("choose_from_suboccupation_list")}
          </Typography>
        )}
        <OccupationList
          filteredOccupations={filteredOccupations}
          handleCopyUrl={handleCopyUrl}
          navigateToPosts={null}
          selectOccupation={occupationClicked}
          handleClickOpenAddOccupation={handleClickOpenAddOccupation}
          defaultImagePath={defaultImagePath}
        />
      </Container>

      {/* Dialog for Phone Number */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogContent>
          <Typography variant="h6">{"022764187"}</Typography>
          <Typography variant="h6">{"0568888522"}</Typography>
        </DialogContent>
      </Dialog>

      {/* Fixed Icon Button */}
      <IconButton
        onClick={handleOpenDialog}
        color="black"
        sx={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          zIndex: 1000,
          bgcolor: "black", // Set background color to black
          color: "white", // Set icon color to white for contrast
          "&:hover": {
            bgcolor: "black", // Ensure background color remains black on hover
          },
        }}
      >
        <PhoneIcon
          sx={{
            fontSize: "5rem",
          }}
        />
      </IconButton>
    </Box>
  );
}
