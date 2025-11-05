import React from "react";
import classNames from "classnames";
// @mui/material components
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Popper from "@mui/material/Popper";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// @mui/icons-material
import Person from "@mui/icons-material/Person";
import Notifications from "@mui/icons-material/Notifications";
import Dashboard from "@mui/icons-material/Dashboard";
// import Search from "@mui/icons-material/Search";

import Button from "../CustomButtons/Button.js";
import useWindowSize from "../Hooks/useWindowSize.js";

// Importa el componente estilizado
import HeaderLinksStyle from "../../assets/jss/nextjs-material-dashboard/components/headerLinksStyle";

export default function AdminNavbarLinks() {
  const size = useWindowSize();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // Reemplazo de Hidden

  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);

  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };

  const handleCloseNotification = () => {
    setOpenNotification(null);
  };

  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };

  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  return (
    <HeaderLinksStyle>
      <div className="searchWrapper">
        {/* Aquí puedes agregar un botón de búsqueda si es necesario */}
      </div>
      <Button
        color={size.width > 959 ? "transparent" : "white"}
        justIcon={size.width > 959}
        simple={!(size.width > 959)}
        aria-label="Dashboard"
        className="buttonLink"
      >
        <Dashboard className="icons" />
        {!isMdUp && <p className="linkText">Dashboard</p>}
      </Button>
      <div className="manager">
        <Button
          color={size.width > 959 ? "transparent" : "white"}
          justIcon={size.width > 959}
          simple={!(size.width > 959)}
          aria-owns={openNotification ? "menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickNotification}
          className="buttonLink"
        >
          <Notifications className="icons" />
          <span className="notifications">5</span>
          {!isMdUp && (
            <p onClick={handleCloseNotification} className="linkText">
              Notifications
            </p>
          )}
        </Button>
        <Popper
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          className={classNames({ popperClose: !openNotification }, "popperNav")}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="notification-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseNotification}>
                  <MenuList role="menu">
                    <MenuItem onClick={handleCloseNotification}>
                      Mike John responded to your email
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotification}>
                      You have 5 new tasks
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotification}>
                      You{"'"}re now friend with Andrew
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotification}>
                      Another Notification
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotification}>
                      Another One
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <div className="manager">
        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={classNames({ popperClose: !openProfile }, "popperNav")}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleCloseProfile}>Settings</MenuItem>
                    <Divider light />
                    <MenuItem onClick={handleCloseProfile}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </HeaderLinksStyle>
  );
}