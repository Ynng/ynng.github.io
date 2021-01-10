import './LinkButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

function LinkButton({ button, style }) {
  let linkClassName = `on-hover-${button.color.substr(1)}`;

  let linkContent;
  if(button.icon) linkContent = <FontAwesomeIcon icon={button.icon} />;
  else linkContent = <p>{button.text}</p>;

  let linkElement;
  if(button.routerLink) linkElement = <Link to = {button.routerLink} className = {linkClassName}>{linkContent}</Link>;
  else linkElement = <a href={button.link} className = {linkClassName}>{linkContent}</a>;

  return (
    <div className = {`link-button ${button.icon ? "icon" : "text"}`} style = {style}>
      <style type="text/css" scoped>
        {`.link-button:hover .${linkClassName}{ background-color : ${button.color};}`}
      </style>
      {linkElement}
    </div>
  )
}

export default LinkButton;