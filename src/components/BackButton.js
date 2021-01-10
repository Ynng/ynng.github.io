import React from 'react';
import './BackButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

function BackButton ({target}) {
  return (
    <Link to={target} className = "back-button">
      <FontAwesomeIcon icon={faArrowCircleLeft}/>
    </Link>
  );

}
export default BackButton;
