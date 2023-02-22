import React from "react";

import "./Nav.scss";

import { BsBook, BsMoon, BsFillMoonFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

const Nav = ({
  isHover,
  onMouseEnterHandler,
  onMouseLeaveHandler,
  onSerif,
  onModern,
  theme,
  font,
  checkTheme,
}) => {
  const options = ["Serif", "Modern"];

  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="container-nav">
      <BsBook className="logo" />
      <div className="left-side">
        <div className="font-selector">
          <Button
            className="font-btn"
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            style={{ color: "var(--main-theme)" }}
          >
            <p
              className="font-selector-btn font-btn"
              style={{ color: "var(--main-theme)" }}
            >
              {font === "'Labrada', serif" ? "Serif" : "Modern"}
            </p>
            <BiChevronDown className="drop-down" />
          </Button>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={() => {
                  handleClose();
                  if (option === "Serif") {
                    onSerif();
                  } else if (option === "Modern") {
                    onModern();
                  }
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div className="dash"></div>
        <div
          className="dark-mode"
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
          onClick={checkTheme}
        >
          {isHover ? (
            <div>
              {theme.palette.mode === "dark" ? (
                <BsMoon className="moon-outline white-ol" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}
            </div>
          ) : (
            <div>
              {theme.palette.mode === "light" ? (
                <BsMoon className="moon-outline" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Nav;
