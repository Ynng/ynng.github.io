import React from "react";
import "./BackButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";

interface Props{
  target: string;
}

const BackButton = ({ target } : Props) => {
  return (
    <Link to={target} className="back-button">
      <FontAwesomeIcon icon={faHome} />
    </Link>
  );
}
export default BackButton;
