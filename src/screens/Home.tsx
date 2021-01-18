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
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

//Colors for icons
const Colors = require("../Colors.json");

function Home() {
  const connectionButtons = [
    {
      icon: faYoutube,
      link:
        "https://www.youtube.com/channel/UC5qAOjtSdCkPEy1BUM78ruw/featured?view_as=subscriber",
      color: Colors.dark.youtube,
    },
    {
      icon: faEnvelope,
      link: "mailto:kh.kevinhuang.03@gmail.com",
      color: Colors.dark.gmail,
    },
    {
      icon: faAsterisk,
      link: "https://dmoj.ca/user/Ynng11626",
      color: Colors.dark.dmoj,
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/kevin-huang-b67b9817a/",
      color: Colors.dark.linkedin,
    },
    {
      icon: faDiscord,
      link: "https://discord.gg/HMZrmM6",
      color: Colors.dark.discord,
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/_ynng_/",
      color: Colors.dark.instagram,
    },
    {
      icon: faGithub,
      link: "https://github.com/Ynng",
      color: Colors.dark.github,
    },
  ];
  const additionalButtons = [
    {
      text: "Resume",
      link:
        "/resume.pdf",
      color: "#80d6ec",
    },
    {
      text: "Portfolio",
      routerLink: "/portfolio",
      color: "#b7fb9d",
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
        <h1>Kevin Huang</h1>
        <p>
          Robotics, VR, Web, Game dev.
          <br />
          Currently learning opengl, tensorflow and motion profiling.
        </p>
        <p>
          I am always looking for more ways to expand my skill set and
          broaden my experiences!
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
