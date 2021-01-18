import React from "react";
import "./LinkButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function LinkButton({ colorCssVar, icon, style, onClick, className, text, routerLink, link}) {
  if(colorCssVar)
    var linkClassName = `link-button-${colorCssVar.substr(2)}`;

  let linkContent;
  if (icon) linkContent = <FontAwesomeIcon icon={icon} />;
  else linkContent = <p>{text}</p>;

  let linkElement;
  if (routerLink)
    linkElement = (
      <Link to={routerLink} className={linkClassName}>
        {linkContent}
      </Link>
    );
  else
    linkElement = (
      <a href={link} className={linkClassName}>
        {linkContent}
      </a>
    );

  return (
    <div
      className={`link-button ${icon ? "icon" : "text"} ${className}`}
      style={style}
      onClick = {onClick}
    >
      {colorCssVar ? 
        <style type="text/css" scoped>
          {`.link-button .${linkClassName} path{ color : var(${colorCssVar});}
            .link-button:active .${linkClassName}{ background-color : var(${colorCssVar}); border-color : var(${colorCssVar})}`}
        </style>
      :<></>}

      {linkElement}
    </div>
  );
}

export default LinkButton;
