import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

//My own components
import ButtonCollection from "../components/ButtonCollection.js";

// fontawesome imports
import { faEnvelope, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faLinkedin,
  faDiscord,
  faInstagram,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  const connectionButtons = [
    {
      icon: faYoutube,
      link:
        "https://www.youtube.com/channel/UC5qAOjtSdCkPEy1BUM78ruw/featured?view_as=subscriber",
      colorCssVar: "--youtube-color",
      tip: "Youtube Channel",
    },
    {
      icon: faEnvelope,
      link: "mailto:kh.kevinhuang.03@gmail.com",
      colorCssVar: "--gmail-color",
      tip: "Email Me",
    },
    {
      icon: faAsterisk,
      link: "https://dmoj.ca/user/Ynng11626",
      colorCssVar: "--dmoj-color",
      tip: "DMOJ Profile",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/kevin-huang-b67b9817a/",
      colorCssVar: "--linkedin-color",
      tip: "LinkedIn",
    },
    {
      icon: faDiscord,
      link: "https://discord.gg/HMZrmM6",
      colorCssVar: "--discord-color",
      tip: "Discord",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/_ynng_/",
      colorCssVar: "--instagram-color",
      tip: "Instagram",
    },
    {
      icon: faGithubAlt,
      link: "https://github.com/Ynng",
      colorCssVar: "--github-color",
      tip: "Github",
    },
  ];
  const additionalButtons = [
    {
      text: "Resume",
      link: "/resume.pdf",
    },
    {
      text: "Portfolio",
      routerLink: "/portfolio",
    },
  ];

  useEffect(() => {
    console.log(
      "now visiting " + window.location.pathname + window.location.search
    );
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="my-container center">
      <div className="my-card">
        <Helmet>
          <title>Home | Kevin Huang</title>
          <meta
            name="description"
            content="Home of Kevin Huang's personal website"
          />
        </Helmet>
        <h1 className="name">Kevin Huang</h1>
        <p>
          <strong>
            Robotics Programmer, Game Developer, Competitive Programmer.
          </strong>
        </p>
        <p>
          Hi, I'm Kevin Huang, currently a Grade 12 student.
          <br />
          I've been most interested in robotics control and computer graphics
          and am always looking for more ways to expand my skill set and broaden
          my experiences!
        </p>
        <ButtonCollection
          buttons={connectionButtons}
          style={{ marginTop: "3rem", marginBottom: "1rem" }}
        />
        <ButtonCollection buttons={additionalButtons} />
      </div>
    </div>
  );
}

export default Home;
