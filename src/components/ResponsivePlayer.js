import "./ResponsivePlayer.css";
import ReactPlayer from "react-player"

function ResponsivePlayer({ url, controls}) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
}

export default ResponsivePlayer;
