import React,  {useState} from "react";
import "./ThemeToggleButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "./LinkButton";

function ThemeToggleButton({ toggleTheme, theme }) {
  const [hideIcon, setHideIcon] = useState(false);

  let handleClick = () => {
    toggleTheme();
  }
  
  return (
    <LinkButton
      icon={theme==="dark"?faSun : faMoon}
      colorCssVar="--text-color"
      onClick={handleClick}
      className={`theme-toggle-button ${hideIcon ? "hide-icon" : ""}`}
    />
  );
}
export default ThemeToggleButton;
