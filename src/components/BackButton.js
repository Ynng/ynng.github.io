import React from "react";
import "./BackButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function BackButton({ target }) {
  return (
    <Link to={target} className="back-button">
      <FontAwesomeIcon icon={faHome} />
    </Link>
  );
}
export default BackButton;
