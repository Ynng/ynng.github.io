import React from "react";
import "./ThemeToggleButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function ThemeToggleButton({ toggleTheme }) {
  return (
    <div onClick={toggleTheme} className="theme-toggle-button">
      <FontAwesomeIcon icon={faSun} />
    </div>
  );
}
export default ThemeToggleButton;
