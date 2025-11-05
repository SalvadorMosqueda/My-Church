import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// MUI components
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Define los estilos usando `styled`
const StyledButton = styled(Button)(({ theme, color, size, round, simple, block, link, justIcon }) => ({
  // Estilo base del botón
  padding: "12px 30px",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "1.42857143",
  textTransform: "uppercase",
  borderRadius: round ? "30px" : "4px",
  ...(simple && {
    background: "transparent",
    boxShadow: "none",
  }),
  ...(block && {
    display: "block",
    width: "100%",
  }),
  ...(link && {
    background: "none",
    color: theme.palette.primary.main,
    boxShadow: "none",
  }),
  ...(justIcon && {
    padding: "12px",
    minWidth: "auto",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  }),
  ...(size === "sm" && {
    padding: "8px 24px",
    fontSize: "12px",
  }),
  ...(size === "lg" && {
    padding: "16px 48px",
    fontSize: "16px",
  }),
  ...(color && {
    backgroundColor: theme.palette[color]?.main || color,
    color: theme.palette[color]?.contrastText || "#fff",
    "&:hover": {
      backgroundColor: theme.palette[color]?.dark || color,
    },
  }),
}));

export default function RegularButton(props) {
  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;

  const btnClasses = classNames({
    [className]: className,
  });

  return (
    <StyledButton
      {...rest}
      color={color}
      size={size}
      round={round ? 1 : 0}
      simple={simple ? 1 : 0}
      block={block ? 1 : 0}
      link={link ? 1 : 0}
      justIcon={justIcon ? 1 : 0}
      disabled={disabled}
      className={btnClasses}
      classes={muiClasses}
    >
      {children}
    </StyledButton>
  );
}

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "transparent",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  muiClasses: PropTypes.object,
  children: PropTypes.node,
};