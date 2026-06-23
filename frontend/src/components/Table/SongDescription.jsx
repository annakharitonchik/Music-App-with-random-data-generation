import Player from "./Player.jsx";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { generateImage } from "../../generation/generateImage.js";
const SongDescription = ({ song }) => {
  const [cover, setCover] = useState(song.image);

  useEffect(() => {
    generateImage(song.image, song.songName).then(setCover);
  }, [song.image, song.songName]);

  return (
    <div className="d-flex gap-5 p-2">
      <div className="d-flex flex-column gap-5 p-3">
        <div>
          <img src={song.image} alt={song.songName} width={150} height={150} />
        </div>
        <div
          className="btn btn-primary rounded-4 d-flex align-items-center
        justify-content-center px-3 py-0 fw-bold"
          style={{
            fontSize: "15px",
          }}
        >
          <span
            style={{
              paddingBottom: "1px",
              paddingRight: "2px",
            }}
          >
            {song.likes}
          </span>
          <FontAwesomeIcon icon={faThumbsUp} size="xs" />
        </div>
      </div>

      <div className="d-flex flex-column gap-2">
        <div className="d-flex  flex-wrap align-items-center gap-3">
          <p className="mb-0 fw-semibold fs-5">{song.songName}</p>
          <Player song={song} />
        </div>

        <div className="d-flex flex-wrap gap-2 align-items-center">
          <span style={{ color: "#c4c4c4" }}>from</span>
          <span>{song.album}</span>

          <span style={{ color: "#c4c4c4" }}>by</span>
          <span className="fst-italic">{song.artist}</span>
        </div>

        <p style={{ color: "#c4c4c4", margin: "0" }}>{song.year}</p>
      </div>
    </div>
  );
};

export default SongDescription;
