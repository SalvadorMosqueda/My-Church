import React from "react";
import classNames from "classnames";
// @mui/material components
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Popper from "@mui/material/Popper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// @mui/icons-material
import Person from "@mui/icons-material/Person";
import useWindowSize from "../Hooks/useWindowSize.js";
import Button from "../CustomButtons/Button.js";
import Notifications from "@mui/icons-material/Notifications";
import RtlHeaderLinksStyle from "../../assets/jss/nextjs-material-dashboard/components/rtlHeaderLinksStyle";
import Search from "@mui/icons-material/Search";
import Dashboard from "@mui/icons-material/Dashboard";
export default function RTLNavbarLinks() {
  const size = useWindowSize();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // Reemplazo de Hidden

  const [open, setOpen] = React.useState(null);

  const handleToggle = (event) => {
    if (open && open.contains(event.target)) {
      setOpen(null);
    } else {
      setOpen(event.currentTarget);
    }
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <RtlHeaderLinksStyle>
      <div className="searchWrapper">
        {/* Botón de búsqueda */}
        <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button>
      </div>
      <Button
        color={size.width > 959 ? "transparent" : "white"}
        justIcon={size.width > 959}
        simple={!(size.width > 959)}
        aria-label="Dashboard"
        className="buttonLink"
      >
        <Dashboard className="icons" />
        {!isMdUp && <p className="linkText">آمارها</p>}
      </Button>
      <div className="manager">
        <Button
          color={size.width > 959 ? "transparent" : "white"}
          justIcon={size.width > 959}
          simple={!(size.width > 959)}
          aria-owns={open ? "menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleToggle}
          className="buttonLink"
        >
          <Notifications className="icons" />
          <span className="notifications">۵</span>
          {!isMdUp && (
            <p onClick={handleToggle} className="linkText">
              اعلان‌ها
            </p>
          )}
        </Button>
        <Popper
          open={Boolean(open)}
          anchorEl={open}
          transition
          disablePortal
          className={classNames({ popperClose: !open }, "popperNav")}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList role="menu">
                    <MenuItem onClick={handleClose} className="dropdownItem">
                      محمدرضا به ایمیل شما پاسخ داد
                    </MenuItem>
                    <MenuItem onClick={handleClose} className="dropdownItem">
                      شما ۵ وظیفه جدید دارید
                    </MenuItem>
                    <MenuItem onClick={handleClose} className="dropdownItem">
                      از حالا شما با علیرضا دوست هستید
                    </MenuItem>
                    <MenuItem onClick={handleClose} className="dropdownItem">
                      اعلان دیگر
                    </MenuItem>
                    <MenuItem onClick={handleClose} className="dropdownItem">
                      اعلان دیگر
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      <button
        color={size.width > 959 ? "transparent" : "white"}
        justIcon={size.width > 959}
        simple={!(size.width > 959)}
        aria-label="Person"
        className="buttonLink"
      >
        <Person className="icons" />
        {!isMdUp && <p className="linkText">حساب کاربری</p>}
      </button>
    </RtlHeaderLinksStyle>
  );
}