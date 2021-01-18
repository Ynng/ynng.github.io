import React from "react";
import "./LinkButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function LinkButton({ button, style, onClick, className }) {
  if(button.colorCssVar)
    var linkClassName = `link-button-${button.colorCssVar.substr(2)}`;

  let linkContent;
  if (button.icon) linkContent = <FontAwesomeIcon icon={button.icon} />;
  else linkContent = <p>{button.text}</p>;

  let linkElement;
  if (button.routerLink)
    linkElement = (
      <Link to={button.routerLink} className={linkClassName}>
        {linkContent}
      </Link>
    );
  else
    linkElement = (
      <a href={button.link} className={linkClassName}>
        {linkContent}
      </a>
    );

  return (
    <div
      className={`link-button ${button.icon ? "icon" : "text"} ${className}`}
      style={style}
      onClick = {onClick}
    >
      {button.colorCssVar ? 
        <style type="text/css" scoped>
          {`.link-button .${linkClassName} path{ color : var(${button.colorCssVar});}
            .link-button:active .${linkClassName}{ background-color : var(${button.colorCssVar}); border-color : var(${button.colorCssVar})}`}
        </style>
      :<></>}

      {linkElement}
    </div>
  );
}

export default LinkButton;
