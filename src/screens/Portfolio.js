import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import Scrollspy from "react-scrollspy";

//Images
import TTHelper from "../images/VEX-Tower-Takeover-Helper.jpg";
import Fixate from "../images/Fixate.jpg";
import Noteworking from "../images/Noteworking.jpg";
import UHS from "../images/UHS.jpg";
import UHSRobotics from "../images/UHSRobotics.jpg";
import TryCatchThrow from "../images/TryCatchThrow.jpg";
import VEXWebsite from "../images/VEXWebsite.jpg";
import VRViewer from "../images/vr-viewer.jpg";
import VRCProgramming from "../images/VRCProgrammingCompressed.jpg";

//My own components
import ResponsivePlayer from "../components/ResponsivePlayer.js";
import ButtonCollection from "../components/ButtonCollection.js";
import BackButton from "../components/BackButton.js";

// fontawesome imports
import {
  faDownload,
  faExternalLinkSquareAlt,
  faUsers,
  faImage,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faYoutube } from "@fortawesome/free-brands-svg-icons";

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
      <div className="content-with-scrollspy">
        <h1 className="title">Portfolio</h1>
        <Scrollspy
          items={[
            "",
            "vrc_programming_lead",
            "",
            "uhs_server",
            "robotics_website",
            "try_catch_throw",
            "fixate",
            "noteworking",
            "",
            "vex_website",
            "vrc_helper",
            "",
            "vr_viewer",
          ]}
          currentClassName="is-current"
          className="scrollspy"
          offset={-300}
        >
          <li className="year">
            <a href="#involvements">Involvements</a>
          </li>
          <li>
            <a href="#vrc_programming_lead">VRC Programming Lead</a>
          </li>
          <li className="year">
            <a href="#2020">2020</a>
          </li>
          <li>
            <a href="#uhs_server">Online School Discord Bot</a>
          </li>
          <li>
            <a href="#robotics_website">FRC Robotics Website</a>
          </li>
          <li>
            <a href="#try_catch_throw">VR Game</a>
          </li>
          <li>
            <a href="#fixate">AI Web-Blocker</a>
          </li>
          <li>
            <a href="#noteworking">Science Solver</a>
          </li>
          <li className="year">
            <a href="#2019">2019</a>
          </li>
          <li>
            <a href="#vex_website">VRC Robotics Website</a>
          </li>
          <li>
            <a href="#vrc_helper">VRC Helper</a>
          </li>
          <li className="year">
            <a href="#2018">2018</a>
          </li>
          <li>
            <a href="#vr_viewer">VR Mesh Viewer</a>
          </li>
        </Scrollspy>
        <h1 className="alignCenter" id="involvements">
          Involvements
        </h1>
        <div className="my-card" id="vrc_programming_lead">
          <h1>
            VRC Programming lead<h5 className="subtitle">2020 Winter</h5>
          </h1>
          <div className="media-container center">
            <ResponsivePlayer
              url="https://www.youtube.com/watch?v=53xpT4EiF6M"
              controls={true}
            />
          </div>
          <p>
            As <strong>programming lead</strong> of LeRoi Robotics, VEX Robotics
            Competition Team 81208X, I self-taught advanced robotic concepts
            such as odometry, motion profiling, inverse kinematics, and feedback
            controller, and implemented with C++ for our team's robot.
          </p>
          <p>
            We are currently ranked <strong>8th globally</strong> and have
            received numerous awards, such as the Think Award, the best award a
            team can receive for their programming.
          </p>
          <ButtonCollection
            buttons={[
              {
                icon: faGithubAlt,
                colorCssVar: "--github-color",
                link: "https://github.com/81208X/VRC2020",
                tip: "Code Release",
              },
              {
                icon: faExternalLinkSquareAlt,
                colorCssVar: "--visit-color",
                link: "https://www.leroirobotics.com/",
                tip: "Website",
              },
              {
                icon: faUsers,
                colorCssVar: "--credits-color",
                link: "https://www.uhsrobotics.org/credits.html",
                tip: "Contributors",
              },
            ]}
            className="left"
          />
        </div>
        <h1 className="alignCenter" id="2020">
          2020
        </h1>
        <div className="my-card" id="uhs_server">
          <h1>
            Discord Server & Bot<h5 className="subtitle">2020 September</h5>
          </h1>
          <div className="media-container">
            <img
              src={UHS}
              alt="Edited screenshot of the server"
              draggable="false"
            />
          </div>
          <p>
            Highly customized and specific <strong>Discord bot</strong> made to
            manage a discord server for my entire highschool. Meant to be
            self-hosted and used for 1 server only.
          </p>
          <p>
            Manages permission, creates roles and channels automatically. Very
            specific error messages to help users with no Discord experience.
          </p>
          <ButtonCollection
            buttons={[
              {
                icon: faGithubAlt,
                colorCssVar: "--github-color",
                link: "https://github.com/Ynng/Highschool-Discord",
                tip: "Github",
              },
              {
                icon: faUsers,
                colorCssVar: "--credits-color",
                link: "https://github.com/Ynng/Highschool-Discord#contributors",
                tip: "Contributors",
              },
            ]}
            className="left"
          />
        </div>
        <div className="my-card" id="robotics_website">
          <h1>
            FRC Robotics Website<h5 className="subtitle">2020 Summer</h5>
          </h1>
          <div className="media-container center-up">
            <img
              src={UHSRobotics}
              alt="screenshot of the website"
              draggable="false"
            />
          </div>
          <p>
            A <strong>website</strong> made for the Unionville High School
            Robotics Club, FRC Robotics Competition(FRC) Team 7721/849.
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
                icon: faUsers,
                colorCssVar: "--credits-color",
                link: "https://www.uhsrobotics.org/credits.html",
                tip: "Contributors",
              },
            ]}
            className="left"
          />
        </div>
        <div className="my-card" id="try_catch_throw">
          <h1>
            Try-Catch-Throw: VR Game<h5 className="subtitle">2020 June</h5>
          </h1>
          <div className="media-container">
            <img
              src={TryCatchThrow}
              alt="render of the game"
              draggable="false"
            />
          </div>
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
        </div>
        <div className="my-card" id="fixate">
          <h1>
            Fixate: AI Web-Blocker<h5 className="subtitle">2020 May</h5>
          </h1>
          <div className="media-container center">
            <ResponsivePlayer
              url="https://www.youtube.com/watch?v=FlUhG99RqHs"
              controls={true}
            />
          </div>
          {/* <div className="media-container"> <img src={Fixate} alt="screenshot of Fixate" draggable="false"/> </div>*/}
          <p>
            <strong>Machine Learning</strong> based website blocker. We analyze
            visited web pages for relevance to the user's “area of work”.
            Unrelated pages will be blocked so you can stay focused even at
            home.
          </p>
          <ButtonCollection
            buttons={[
              {
                icon: faGithubAlt,
                colorCssVar: "--github-color",
                link: "https://github.com/Ynng/TOHacks2020",
                tip: "Github",
              },
              {
                icon: faFileAlt,
                colorCssVar: "--devpost-color",
                link: "https://devpost.com/software/fixate-0m2x8d",
                tip: "DevPost",
              },
              {
                icon: faDownload,
                colorCssVar: "--download-color",
                link: "https://github.com/Ynng/TOHacks2020/releases/latest",
                tip: "Download",
              },
              {
                icon: faYoutube,
                colorCssVar: "--youtube-color",
                link: "https://www.youtube.com/watch?v=FlUhG99RqHs",
                tip: "Video",
              },
            ]}
            className="left"
          />
        </div>
        <div className="my-card" id="noteworking">
          <h1>
            Noteworking: Science Solver
            <h5 className="subtitle">2020 January</h5>
          </h1>
          <div className="media-container center">
            <img
              src={Noteworking}
              alt="Screenshot of Noteworking"
              draggable="false"
            />
          </div>
          <p>
            Science solver all-in-one. This <strong>web app</strong> allows for
            the aggregation of an unlimited amount of formulas all contained
            within the same interface.
          </p>
          <ButtonCollection
            buttons={[
              {
                icon: faGithubAlt,
                colorCssVar: "--github-color",
                link: "https://github.com/Ynng/Starter-Hacks-2020",
                tip: "Github",
              },
              {
                icon: faFileAlt,
                colorCssVar: "--devpost-color",
                link: "https://devpost.com/software/noteworking",
                tip: "DevPost",
              },
              {
                icon: faExternalLinkSquareAlt,
                colorCssVar: "--visit-color",
                link: "https://ynng.github.io/Starter-Hacks-2020/",
                tip: "Visit",
              },
            ]}
            className="left"
          />
        </div>
        <h1 className="alignCenter" id="2019">
          2019
        </h1>
        <div className="my-card" id="vex_website">
          <h1>
            VRC Robotics Website<h5 className="subtitle">2019 December</h5>
          </h1>
          <div className="media-container center">
            <img
              src={VEXWebsite}
              alt="Screenshot of 81208X team website"
              draggable="false"
            />
          </div>
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
            ]}
            className="left"
          />
        </div>
        <div className="my-card" id="vrc_helper">
          <h1>
            VRC Tower Takeover Helper<h5 className="subtitle">2019 November</h5>
          </h1>
          <div className="media-container center">
            <img
              src={TTHelper}
              alt="Screenshot of VRC Tower Takeover Helper"
              draggable="false"
            />
          </div>
          <p>
            A <strong>PWA</strong> made for mobile usage only for VRC season
            2019-2020. This app helps our team to track our current score during
            the game and provides recommendations. It was designed to require
            minimal attention when using.
          </p>
          <ButtonCollection
            buttons={[
              {
                icon: faGithubAlt,
                colorCssVar: "--github-color",
                link: "https://github.com/Ynng/VEX-Tower-Takeover-Helper",
                tip: "Github",
              },
              {
                icon: faExternalLinkSquareAlt,
                colorCssVar: "--visit-color",
                link: "https://ynng.github.io/VEX-Tower-Takeover-Helper/",
                tip: "Visit",
              },
            ]}
            className="left"
          />
        </div>
        <h1 className="alignCenter" id="2018">
          2018
        </h1>
        <div className="my-card" id="vr_viewer">
          <h1>
            VR Mesh Viewer<h5 className="subtitle">2018 - 2020</h5>
          </h1>
          <div className="media-container center">
            <img
              src={VRViewer}
              alt="First screenshot of the program working"
              draggable="false"
            />
          </div>
          <p>
            A simple 3d mesh viewer for <code>Steam VR</code>, made with{" "}
            <code>OpenGL</code> and{" "}
            <a href="https://libigl.github.io/">
              <code>libigl.</code>
            </a>
          </p>
          <p>
            This project taught me a lot about low level computer graphics and
            gave me an early look into practical applications of linear algebra.{" "}
          </p>
          <ButtonCollection
            buttons={[
              {
                icon: faGithubAlt,
                colorCssVar: "--github-color",
                link:
                  "https://github.com/psarahdactyl/libigl-vr-viewer-version",
                tip: "Github",
              },
            ]}
            className="left"
          />
        </div>

        <h2 className="alignCenter">Website Under Construction!</h2>
        <h3 className="alignCenter">More coming soon</h3>
      </div>
    </div>
  );
}
export default Portfolio;
