import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { suggestOccupation } from "services/OccupationService";
import useLanguageTranslation from "hooks/useLanguageTranslation";

const AddCategoryDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { t } = useLanguageTranslation();
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    parentOccupation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (newCategory.name !== "") dispatch(suggestOccupation(newCategory, t));
    setNewCategory({
      name: "",
      description: "",
      parentOccupation: "",
    });
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{t("addNewOccupation")}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label={t("occupationName")}
          name="name"
          type="text"
          fullWidth
          value={newCategory.name}
          onChange={handleChange}
          helperText={t("occupationNameHelper")}
        />
        <TextField
          margin="dense"
          label={t("descriptions")}
          name="description"
          type="text"
          fullWidth
          value={newCategory.description}
          onChange={handleChange}
          helperText={t("descriptionHelper")}
        />
        <TextField
          margin="dense"
          label={t("parentOccupation")}
          name="parentOccupation"
          type="text"
          fullWidth
          value={newCategory.parentOccupation}
          onChange={handleChange}
          helperText={t("parentOccupationHelper")}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t("cancel")}</Button>
        <Button onClick={handleSave}>{t("save")}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategoryDialog;
