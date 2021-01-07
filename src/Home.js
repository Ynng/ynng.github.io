import './Home.css';
import './Colors.css';
import './ButtonCollection.css';
import { Link } from "react-router-dom";

// fontawesome imports
import { faEnvelope, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faLinkedin, faDiscord, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Home() {
  return (
    <div className="my-card">
      <h1>Kevin Huang</h1>
      <p>Robotics, VR, Web, Game dev.<br />Currently learning opengl, tensorflow and motion profiling</p>


      <div className="button-collection-wrapper">

        <ul className="button-collection connections">
          <li><a href="https://www.youtube.com/channel/UC5qAOjtSdCkPEy1BUM78ruw/featured?view_as=subscriber" className="youtube"><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href="mailto:kh.kevinhuang.03@gmail.com" className="gmail"><FontAwesomeIcon icon={faEnvelope} /></a></li>
          <li><a href="https://dmoj.ca/user/Ynng11626" className="dmoj"><FontAwesomeIcon icon={faAsterisk} /></a></li>
          <li><a href="https://www.linkedin.com/in/kevin-huang-b67b9817a/" className="linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="https://discord.gg/HMZrmM6" className="discord"><FontAwesomeIcon icon={faDiscord} /></a></li>
          <li><a href="https://www.instagram.com/_ynng_/" className="instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://github.com/Ynng" className="github"><FontAwesomeIcon icon={faGithub} /></a></li>
        </ul>

        <ul className="button-collection projects">
          <li>
            <a href="https://github.com/Ynng#what-im-working-on-right-now" className="current-project">
              <p>Current
              Project
                </p>
            </a>
          </li>
          <li>
            <Link to="/projects" className="past-projects">
              <p>All Projects</p>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Home;
