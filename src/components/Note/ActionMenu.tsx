import React, { useState } from "react";
import { MoreVertical } from "react-feather";
import { IconButton } from "../";
import { Menu } from "@material-ui/core";

export const ActionMenu: React.FC = ({ children }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleOpen = (e: React.MouseEvent) => {
    setMenuAnchor(e.target);
  }

  const handleClose = (e: React.MouseEvent) => {
    setMenuAnchor(null);
  }

  return (
    <>
      <IconButton
        className="action-menu"
        onClick={handleOpen}
      >
        <MoreVertical />
      </IconButton>

      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </>
  );
}
