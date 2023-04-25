import React from "react";
import { Box, AppBar, Toolbar, Typography, Link } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex" }}>
            <Typography sx={{ flexFlow: 1, cursor: "pointer" }} variant="h4">
              Where in the world?
            </Typography>
            <DarkModeIcon
              // onClick={handleChange}
              sx={{ cursor: "pointer " }}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
