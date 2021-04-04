import React, { useEffect, useState } from "react";
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
import LinkButton from "../components/LinkButton.js";

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
      icon: faAsterisk,
      link: "https://dmoj.ca/user/Ynng11626",
      colorCssVar: "--dmoj-color",
      tip: "DMOJ Profile",
    },
    {
      icon: faEnvelope,
      link: "mailto:kh.kevinhuang.03@gmail.com",
      colorCssVar: "--gmail-color",
      tip: "Email Me",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/kevin-huang-b67b9817a/",
      colorCssVar: "--linkedin-color",
      tip: "LinkedIn",
    },
    {
      icon: faGithubAlt,
      link: "https://github.com/Ynng",
      colorCssVar: "--github-color",
      tip: "Github",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/_ynng_/",
      colorCssVar: "--instagram-color",
      tip: "Instagram",
    },
    {
      icon: faDiscord,
      link: "https://discord.gg/HMZrmM6",
      colorCssVar: "--discord-color",
      tip: "Discord",
    },
  ];
  const connectionButtonsLess = [
    {
      icon: faEnvelope,
      link: "mailto:kh.kevinhuang.03@gmail.com",
      colorCssVar: "--gmail-color",
      tip: "Email Me",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/kevin-huang-b67b9817a/",
      colorCssVar: "--linkedin-color",
      tip: "LinkedIn",
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
  const [descriptionVersion, setDescriptionVersion] = useState("Less");

  useEffect(() => {
    console.log(
      "now visiting " + window.location.pathname + window.location.search
    );
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="my-container center">
      <Helmet>
        <title>Home | Kevin Huang</title>
        <meta
          name="description"
          content="Home of Kevin Huang's personal website"
        />
      </Helmet>
      <div className="my-card">
        <h1 className="name">Kevin Huang</h1>
        <h1 className="title-desc">Software Developer & Student</h1>
        <ButtonCollection buttons={additionalButtons} />

        <p>
          <strong>Hello! I am Kevin Huang!</strong>
        </p>
        <div style={{ marginBottom: "1.5rem" }}>
          {descriptionVersion === "More" ? (
            <>
              <p>
                I am a Grade 12 student in Markham, Ontario, Canada, with an
                interest in control engineering and computer graphics.
              </p>
              <p>
                I am the lead programmer of VRC team 81208X, captain of FRC team
                7721, interned at SV Robotics Academy as a software developer,
                and have excellent academic performance with a 97% GPA.
              </p>
              <p>
                In addition to school, I am always looking for more ways to
                expand my skills and broaden my experiences. I developed a
                Discord bot to help manage a school-wide Discord server with
                over 500 members, verifying users and creating chat channels
                automatically. I have attended various hackathons and contests
                and achieved various awards. I also often contribute to
                open-source projects.
              </p>
              <p>
                In my spare time, I enjoy playing badminton, VR, and am
                currently trying my luck at drawing.
              </p>
            </>
          ) : (
            <>
              <p>
                I’m a Grade 12 student in Ontario and I like control engineering
                and computer graphics.
              </p>
              <p>
                I am always looking for more ways to expand my skills and
                broaden my experience: whether it's robotics, math or computer
                science competitions, hackathons, internships or personal
                projects.
              </p>
            </>
          )}
        </div>
        <ul className="button-collection" style={{ marginBottom: "1rem" }}>
          <LinkButton
            text={"Less"}
            onClick={() => {
              setDescriptionVersion("Less");
            }}
            className={descriptionVersion === "Less" ? "selected" : ""}
          />
          <LinkButton
            text={"More"}
            onClick={() => {
              setDescriptionVersion("More");
            }}
            className={descriptionVersion === "More" ? "selected" : ""}
          />
        </ul>

        <ButtonCollection
          buttons={connectionButtons}
          style={descriptionVersion !== "More" ? { display: "none" } : {}}
          className="center"
        />
        <ButtonCollection
          buttons={connectionButtonsLess}
          style={descriptionVersion !== "Less" ? { display: "none" } : {}}
          className="center"
        />
      </div>
    </div>
  );
}

export default Home;
