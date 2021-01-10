import React from "react";
import "./ButtonCollection.css";
import LinkButton from "./LinkButton.js";

function ButtonCollection({ buttons, style, className }) {
  return (
    <ul className={`button-collection ${className}`} style={style}>
      {buttons.map((button, idx) => (
        <LinkButton key={idx} button={button} />
      ))}
    </ul>
  );
}
export default ButtonCollection;
