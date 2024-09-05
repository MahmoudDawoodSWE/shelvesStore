import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import {
  Block as BlockIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { blockUser } from "services/userService";

const BlockUserMenu = ({ userIdToBlock }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

const handleBlockUser = (e) => {
  e.stopPropagation();
  if (userIdToBlock) {
    dispatch(blockUser(userIdToBlock));
  }
  closeMenu();
};

  return (
    <>
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          openMenu(e);
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleBlockUser}>
          <BlockIcon sx={{ mr: 1 }} /> Block User
        </MenuItem>
      </Menu>
    </>
  );
};

export default BlockUserMenu;
