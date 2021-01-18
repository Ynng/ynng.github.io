import React from "react";
import "./ThemeToggleButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "./LinkButton";

function ThemeToggleButton({ toggleTheme }) {
  return (
    <LinkButton
      button={{
        icon: faSun,
        colorCssVar: "--text-color",
      }}
      onClick = {toggleTheme}
      className = "theme-toggle-button"
    />
  );
}
export default ThemeToggleButton;
