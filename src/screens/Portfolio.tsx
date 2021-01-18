import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

//My own components
import ButtonCollection from "../components/ButtonCollection";
import BackButton from "../components/BackButton";

// fontawesome imports
import {
  faFileDownload,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

//Colors for icons
const Colors = require("../Colors.json");

function Portfolio() {
  useEffect(() => {
    console.log(
      "now visiting " + window.location.pathname + window.location.search
    );
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="my-container">
      <Helmet>
        <title>Portfolio | Kevin Huang</title>
        <meta
          name="description"
          content="Kevin Huang's projects and involvements"
        />
      </Helmet>
      <BackButton target="/" />
      <h1 className="title">Portfolio</h1>
      <div className="my-card">
        <h2>Robotics Website</h2>
        <img
          src="https://i.imgur.com/Z9Mkznk.png"
          alt="screenshot of the website"
        ></img>
        <p>
          Made using vanilla HTML, CSS and JavaScript, This website contains
          information on the members, history, and the current activities of
          Unionville High School Robotics Club, FRC Team 7721/849.
        </p>
        <ButtonCollection
          buttons={[
            {
              icon: faGithub,
              color: Colors.dark.github,
              link: "https://github.com/UHSRobotics/UHSRobotics.github.io",
            },
            {
              icon: faWindowMaximize,
              color: Colors.dark.visit,
              link: "https://uhsrobotics.github.io/",
            },
          ]}
          className="left"
        />

        {/* <ButtonCollection buttons = {[
          { text: "Github", color: Colors.light.github, link: "https://github.com/UHSRobotics/UHSRobotics.github.io" },
          { text: "Visit", color: Colors.light.visit, link: "https://uhsrobotics.github.io/" }
        ]}/>   */}
      </div>
      <div className="my-card">
        <h2>Try-Catch-Throw</h2>
        <img
          src="https://i.imgur.com/7uZOFbK.png"
          alt="render of the game"
        ></img>
        <p>
          A VR game made in Unity for a school project, where you are a magician
          protecting a castle from trebuchets. You "force pull" incoming bombs
          and throwing them back at enemies. You can also buy more powerful
          explosives and magical items yourself to throw into the field.
        </p>
        <ButtonCollection
          buttons={[
            {
              icon: faGithub,
              color: Colors.dark.github,
              link: "https://github.com/Ynng/Try-Catch-Throw",
            },
            {
              icon: faFileDownload,
              color: Colors.dark.download,
              link: "https://github.com/Ynng/Try-Catch-Throw/releases/latest",
            },
          ]}
          className="left"
        />

        {/* <ButtonCollection buttons = {[
          { text: "Github", color: Colors.light.github, link: "https://github.com/Ynng/Try-Catch-Throw" },
          { text: "Download", color: Colors.light.download, link: "https://github.com/Ynng/Try-Catch-Throw/releases/latest" }
        ]}/>   */}
      </div>

      <h2 className="alignCenter">Website Under Construction!</h2>
      <h3 className="alignCenter">More coming soon</h3>
    </div>
  );
}
export default Portfolio;
