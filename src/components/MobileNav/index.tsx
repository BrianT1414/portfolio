"use client";
import { navMap } from "@/constants";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const anchorEl = React.useRef(null);

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <IconButton onClick={() => setOpen(!open)} ref={anchorEl}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl.current} open={open} onClose={handleClose}>
        {Object.entries(navMap).map(([name, path]) => (
          <MenuItem
            key={name}
            component={Link}
            href={path}
            onClick={handleClose}
          >
            {name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
