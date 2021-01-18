import React from "react";
import "./LinkButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function LinkButton({
  colorCssVar,
  icon,
  style,
  onClick,
  className,
  text,
  routerLink,
  link,
  tip,
  tipPlacement = "top"
}) {
  if (colorCssVar) var linkClassName = `link-button-${colorCssVar.substr(2)}`;

  if (icon) var linkContent = <FontAwesomeIcon icon={icon} />;
  else var linkContent = <h2>{text}</h2>;

  // Chooses between a and Link based on the type of link
  if (routerLink)
    var linkElement = (
      <Link to={routerLink} className={linkClassName}>
        {linkContent}
      </Link>
    );
  else
    var linkElement = (
      <a href={link} className={linkClassName}>
        {linkContent}
      </a>
    );

  var button = (
    <div
      className={`link-button ${icon ? "icon" : "text"} ${className} ${colorCssVar ? "color-changing" : "static"}`}
      style={style}
      onClick={onClick}
    >
      {colorCssVar ? (
        <style type="text/css" scoped>
          {`.link-button .${linkClassName} path{ color : var(${colorCssVar});}
        .link-button:active .${linkClassName}{ background-color : var(${colorCssVar}); border-color : var(${colorCssVar})}`}
        </style>
      ) : (
        <></>
      )}
      {linkElement}
    </div>
  );

  if (tip)
    return (
      <OverlayTrigger
        placement={tipPlacement}
        overlay={<Tooltip className = "link-button-tooltip">{tip}</Tooltip>}
      >
        {button}
      </OverlayTrigger>
    );
  return button;
}

export default LinkButton;
