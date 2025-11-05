import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import SidebarStyle from "../../assets/jss/nextjs-material-dashboard/components/sidebarStyle";
import classNames from "classnames";
import AdminNavbarLinks from "../Navbars/AdminNavbarLinks";
import { boxShadow, drawerWidth, transition } from "@/assets/jss/nextjs-material-dashboard";

interface SidebarProps {
  color?: string;
  logo?: string;
  image?: string;
  logoText?: string;
  routes?: Array<{
    layout: string;
    path: string;
    name: string;
    icon: string;
  }>;
  open?: boolean;
  handleDrawerToggle?: () => void;
  logoLink?: string;
}

const Sidebar = ({
  color = "blue",
  logo,
  image,
  logoText,
  routes = [],
  open,
  handleDrawerToggle,
  logoLink = "#",
}: SidebarProps) => {
  const theme = useTheme();
  const router = useRouter();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md")); // Detecta si la pantalla es >= 960px
  console.log("Sidebar rendered with routes:", open);
  const activeRoute = (routeName: string): boolean => {
    return router.pathname === routeName;
  };

  const DrawerContent = () => (
    <SidebarStyle>
      <div className="logo">
        <a
          href={logoLink}
          className="logoLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          {logo && (
            <div className="logoImage">
              <img src={logo} alt="logo" />
            </div>
          )}
          {logoText}
        </a>
      </div>

      {/* Wrapper del sidebar */}
      <div className="sidebarWrapper">
        <List className="list">
          {routes.map((route, key) => {
            const isActive = activeRoute(route.layout + route.path);
            const isPro = route.path === "/upgrade-to-pro";
            const whiteFont = isActive || isPro;

            // Clases CSS dinámicas
            let listItemClasses = "";
            let activePro = "";

            if (isPro) {
              activePro = "activePro ";
              listItemClasses = color;
            } else if (isActive) {
              listItemClasses = color;
            }

            const whiteFontClass = whiteFont ? "whiteFont" : "";

            return (
              <Link
                href={route.layout + route.path}
                key={key}
                passHref
                legacyBehavior
              >
                <ListItem
                  component="div"
                  className={`itemLink ${listItemClasses} ${activePro} ${whiteFontClass}`}
                  style={{ cursor: "pointer" }}
                >
                  {/* Ícono */}
                  {typeof route.icon === "string" ? (
                    <Icon className={`itemIcon ${whiteFontClass}`}>
                      {route.icon}
                    </Icon>
                  ) : (
                    <route.icon className={`itemIcon ${whiteFontClass}`} />
                  )}

                  {/* Texto */}
                  <ListItemText
                    primary={route.name}
                    className={`itemText ${whiteFontClass}`}
                    disableTypography
                  />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>

      {/* Imagen de fondo */}
      {image && (
        <div
          className="background"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </SidebarStyle>
  );

  return (
<div>
  {/* Drawer temporal para móviles */}
  {!isMdUp && (
    <Drawer
      variant="temporary"
      anchor="right" // Cambiado de "right" a "left"
      open={open}
      onClose={handleDrawerToggle}
    sx={(theme) => ({
  '& .MuiDrawer-paper': {
    border: 'none',
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0, // mantener en la derecha
    left: 'auto',
    zIndex: 1032,
    width: drawerWidth,
    ...boxShadow,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      height: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: drawerWidth,
      display: 'block',
      height: '100vh',
      visibility: 'visible',
      overflowY: 'visible',
      borderTop: 'none',
      textAlign: 'left',
      paddingRight: 0,
      paddingLeft: 0,
      transform: open
        ? 'translateX(0)' // Mostrarlo en su posición normal
        : `translateX(${drawerWidth}px)`, // Ocultarlo desplazándolo a la derecha
      ...transition,
    },
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
    }),
  },
})}

      ModalProps={{
        keepMounted: true, // Mejor rendimiento en móviles
      }}
    >
      <div className="sidebarWrapper">
        {DrawerContent()}
      </div>
      {image && (
        <div
          className="background"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </Drawer>
  )}

  {/* Drawer permanente para escritorio */}
  {isMdUp && (
    <Drawer
      variant="permanent"
      anchor="left" // Asegúrate de que también esté configurado como "left"
      open
      classes={{
        paper: "drawerPaper",
      }}
    >
      <div className="sidebarWrapper">{DrawerContent()}</div>
      {image && (
        <div
          className="background"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </Drawer>
  )}
</div>
  );
};

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  color: PropTypes.oneOf(["white", "purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  logoLink: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      layout: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType])
        .isRequired,
    })
  ).isRequired,
  open: PropTypes.bool,
};

export default Sidebar;