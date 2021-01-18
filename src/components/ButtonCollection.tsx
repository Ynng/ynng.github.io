import React from "react";
import "./ButtonCollection.css";
import LinkButton from "./LinkButton";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

interface Props{
  buttons : IconDefinition;
  style : React.CSSProperties;
  className : string;
}

const ButtonCollection = ({ buttons, style, className } : Props) => {
  return (
    <ul className={`button-collection ${className}`} style={style}>
      {buttons.map((button, idx) => (
        <LinkButton key={idx} button={button} />
      ))}
    </ul>
  );
}
export default ButtonCollection;
