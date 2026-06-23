import Player from "./Player.jsx";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { generateCustomImages } from "../../generation/generateCustomImages.js";
const SongDescription = ({ song }) => {
  const [cover, setCover] = useState(song.image);

  useEffect(() => {
    generateCustomImages(song.image, song.artist, song.album).then(setCover);
  }, [song.image, song.songName]);

  return (
    <div className="d-flex gap-3 p-2">
      <div className="d-flex flex-column gap-2 p-1">
        <div>
          <img src={cover} alt={song.songName} width={150} height={150} />
        </div>
        <div
          className="btn btn-primary rounded-4 d-flex align-items-center
        justify-content-center px-3 py-0 fw-bold mx-5"
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
