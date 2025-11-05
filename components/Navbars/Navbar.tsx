import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
// MUI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
// MUI icons
import Menu from "@mui/icons-material/Menu";
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import Button from "../CustomButtons/Button.js";

import HeaderStyle from "../../assets/jss/nextjs-material-dashboard/components/headerStyle.tsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function Header(props) {
  // used for checking current route
  const router = useRouter();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md")); // Check if screen is md or larger

  function makeBrand() {
    const route = props.routes.find(
      (prop) => router.pathname === prop.layout + prop.path
    );
    return route ? route.name : "";
  }

  const { color } = props;

  return (
    <HeaderStyle>
      <AppBar className={`appBar ${color ? color : ""}`}>
        <Toolbar className="container">
          <div className="flex">
            {/* Here we create navbar brand, based on route name */}
            <Button color="transparent" href="#" className="title">
              {makeBrand()}
            </Button>
          </div>
          {/* Show AdminNavbarLinks or Menu button based on mdUp */}
          {mdUp ? (
            <Box>
              <AdminNavbarLinks />
            </Box>
          ) : (
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerToggle}
              >
                <Menu />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </HeaderStyle>
  );  
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      layout: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType])
        .isRequired,
    })
  ).isRequired,
};