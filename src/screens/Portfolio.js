import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import TTHelper from "../images/VEX-Tower-Takeover-Helper.jpg";

//My own components
import ButtonCollection from "../components/ButtonCollection.js";
import BackButton from "../components/BackButton.js";

// fontawesome imports
import {
  faDownload,
  faExternalLinkSquareAlt,
  faUsers,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

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
        <h2>FRC Robotics Website</h2>
        <img
          src="https://i.imgur.com/Z9Mkznk.png"
          alt="screenshot of the website"
        ></img>
        <p>
          Made using vanilla HTML, CSS and JavaScript, This{" "}
          <strong>website</strong> contains information on the members, history,
          and the current activities of Unionville High School Robotics Club,
          First Robotics Competition(FRC) Team 7721/849.
        </p>
        <ButtonCollection
          buttons={[
            {
              icon: faGithubAlt,
              colorCssVar: "--github-color",
              link: "https://github.com/UHSRobotics/UHSRobotics.github.io",
              tip: "Github",
            },
            {
              icon: faExternalLinkSquareAlt,
              colorCssVar: "--visit-color",
              link: "https://www.uhsrobotics.org/",
              tip: "Visit",
            },
            {
              icon: faImage,
              colorCssVar: "--images-color",
              link: "https://www.uhsrobotics.org/gallery.html",
              tip: "Gallery",
            },
            {
              icon: faUsers,
              colorCssVar: "--credits-color",
              link: "https://www.uhsrobotics.org/credits.html",
              tip: "Credits",
            },
          ]}
          className="left"
        />
      </div>
      <div className="my-card">
        <h2>Try-Catch-Throw</h2>
        <img
          src="https://i.imgur.com/7uZOFbK.png"
          alt="render of the game"
        ></img>
        <p>
          A <strong>VR game</strong> made in Unity for a school project, where
          you protect a castle from trebuchet using a "Force Pull" wand,
          inspired by the gravity gloves from Half-Life: Alyx.
        </p>
        <ButtonCollection
          buttons={[
            {
              icon: faGithubAlt,
              colorCssVar: "--github-color",
              link: "https://github.com/Ynng/Try-Catch-Throw",
              tip: "Github",
            },
            {
              icon: faDownload,
              colorCssVar: "--download-color",
              link: "https://github.com/Ynng/Try-Catch-Throw/releases/latest",
              tip: "Download",
            },
            {
              icon: faImage,
              colorCssVar: "--images-color",
              link: "https://github.com/Ynng/Try-Catch-Throw#screenshots",
              tip: "Screenshots",
            },
          ]}
          className="left"
        />

        {/* <ButtonCollection buttons = {[
          { text: "Github", color: Colors.light.github, link: "https://github.com/Ynng/Try-Catch-Throw" },
          { text: "Download", color: Colors.light.download, link: "https://github.com/Ynng/Try-Catch-Throw/releases/latest" }
        ]}/>   */}
      </div>
      <div className="my-card">
        <h2>VRC Tower Takeover Helper</h2>
        <img src={TTHelper} alt="render of the game"></img>
        <p>
          A <strong>PWA</strong> made with vanilla javascript for the 2019-2020
          season of VEX Robotics Competition. This app helps our team to track
          our current score during the game and provides recommendations. By
          design, it requires minimal attention when using.
        </p>
        <ButtonCollection
          buttons={[
            {
              icon: faGithubAlt,
              colorCssVar: "--github-color",
              link: "https://github.com/81208X/81208X.github.io",
              tip: "Github",
            },
            {
              icon: faExternalLinkSquareAlt,
              colorCssVar: "--visit-color",
              link: "https://www.leroirobotics.com/",
              tip: "Visit",
            },
            {
              icon: faImage,
              colorCssVar: "--images-color",
              link: "https://www.leroirobotics.com/gallery.html",
              tip: "Gallery",
            },
          ]}
          className="left"
        />
      </div>
      <div className="my-card">
        <h2>VRC Robotics Website</h2>
        <img
          src="https://i.imgur.com/4DNOlCQ.png"
          alt="render of the game"
        ></img>
        <p>
          A <strong>website</strong> made with bootstrap for my VEX Robotics
          Competition(VRC) Team, 81208X LeRoi Robotics. One of the first
          websites I designed and developed.
        </p>
        <ButtonCollection
          buttons={[
            {
              icon: faGithubAlt,
              colorCssVar: "--github-color",
              link: "https://github.com/81208X/81208X.github.io",
              tip: "Github",
            },
            {
              icon: faExternalLinkSquareAlt,
              colorCssVar: "--visit-color",
              link: "https://www.leroirobotics.com/",
              tip: "Visit",
            },
            {
              icon: faImage,
              colorCssVar: "--images-color",
              link: "https://www.leroirobotics.com/gallery.html",
              tip: "Gallery",
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
