import React from "react";
import "./BackButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "./LinkButton";

function BackButton({ target }) {
  return (
    <LinkButton
      button={{
        icon: faHome,
        colorCssVar: "--text-color",
        routerLink: target
      }}
      className = "back-button"
    />
  );
}
export default BackButton;
